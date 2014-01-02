/*
set F1:F30 nontextvalueformat $#,##0.00
set G1:G30 nontextvalueformat #,##0.0000
set H1:H30 nontextvalueformat #,##0
set I1 formula ABAR(100,H1)
filldown I1:I32 all
*/

ws = new WebSocket('ws://websocket.mtgox.com:80/mtgox?Currency=USD');
ws.onopen = function() {
    console.log('Connection opened');
        ws.send(JSON.stringify({"op": "mtgox.subscribe","type": "trades"    })); 
    ws.send(JSON.stringify({"op": "mtgox.subscribe","type": "depth.BTCUSD"   }));
   
}
trades=[];
ctr = 0;
book = [{}, {}, {}]; //1 ask 2 bid , 0 who knows;
BID = 2;
ASK = 1;
BOOKLEVELS = 12;
MAXCTR = 1; // used to autostop during debgging
msgs = []; 
ws.onmessage = function(message) {
    var debug = 1;

    //msgs.push(message);
    ctr++;
    if (ctr > 199 && MAXCTR) ws.close();
    
    obj = JSON.parse(message.data);

    if (debug && obj["channel_name"] == "trade.BTC") console.log(message.data);

    if (obj["channel_name"] == "ticker.BTCUSD") {
        //console.log(obj); 
        //console.log(obj.ticker.last.value);
        if (!spreadsheet.editor.busy) {
            sset("C3", obj.ticker.last.value);
            sset("C4", obj.ticker.high.value);
            sset("C5", obj.ticker.low.value);
            sset("C6", obj.ticker.vwap.value);
            sset("C7", obj.ticker.vol.display_short);
            sset("C8", obj.stamp);
            sset("C9", bestbid);
            sset("C10", bestask);
            sset("C11", Math.round(spread*10)/10);
        }
        trades.push([obj.stamp,obj.ticker.last.value]);
    }
    if (obj["channel_name"] == "depth.BTCUSD") {
        bestbids = Object.keys(book[2]).splice(0 - BOOKLEVELS, BOOKLEVELS);
        bestasks = Object.keys(book[1]).splice(0, BOOKLEVELS);

        bestask=bestasks[0];
        bestbid=bestbids[bestbids.length-1];
        spread=bestask/(bestbid/100)-100;

        //if (ctr % 10 == 9) {
        if (ctr > 40) {
            drawbook();
            //console.log(book[2]);
            //console.log("bids:");
            if (debug) {
                console.log(bestbids);
                console.log(bestbids.map(function(e) {
                    return e / 100000
                }));
            }
            //console.log("askss:");
            if (debug) {
                console.log(bestasks);
                console.log(bestasks.map(function(e) {
                    return book[ASK][e]
                }));
                console.log(message.data)
            }

        }
        //sset ("C8",obj.depth.now);
        //sset ("C9",obj.stamp);
        if (obj.depth.total_volume_int != "0") {
            book[obj.depth.type][obj.depth.price_int] = obj.depth.total_volume_int / 100000000;
        }
        else {
            delete book[obj.depth.type][obj.depth.price_int]
        }
    }
}

function drawbook() {
    gs = "";
    drawasks();
    drawbids();
    if (!spreadsheet.editor.busy && gs) LCexec(gs);
}

function drawasks() {
    var cum = 0;
    for (row = BOOKLEVELS; row > 0; row--) {
        tval = book[ASK][bestasks[BOOKLEVELS - row]];
        
        if (tval) {
            cum += tval;
            gs += set_str("F" + row, bestasks[BOOKLEVELS - row] / 100000);
            //EL("cell_F"+row).innerHTML=Math.round(bestasks[15-row]/100)/1000;
            gs += set_str("G" + row, tval);
            //EL("cell_G"+row).innerHTML=Math.round(tval);
            gs += set_str("H" + row, cum);
            //EL("cell_H"+row).innerHTML=Math.round(cum);
        }
    }
}

function drawbids() {
    var cum = 0;
    for (row = 1; row < BOOKLEVELS + 1; row++) {
        tval = book[BID][bestbids[BOOKLEVELS - row]];
        
        if (tval) {
            cum += tval;
            gs += set_str("F" + (BOOKLEVELS + row), bestbids[BOOKLEVELS - row] / 100000);
            //EL("cell_F"+(15+row)).innerHTML=Math.round(bestbids[15-row]/100)/1000;
            gs += set_str("G" + (BOOKLEVELS + row), tval);
            //EL("cell_G"+(15+row)).innerHTML=Math.round(tval);
            gs += set_str("H" + (BOOKLEVELS + row), cum);
            //EL("cell_H"+(15+row)).innerHTML=Math.round(cum); 

        }
    }
}
