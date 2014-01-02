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
    ws.send(JSON.stringify({
        "op": "mtgox.subscribe",
        "type": "depth.BTCUSD"
    }));
}
ctr = 0;
book = [{}, {}, {}]; //1 ask 2 bid , 0 who knows;
BID = 2;
ASK = 1;
MAXCTR = 0; // used to autostop during debgging
msgs = [];
ws.onmessage = function(message) {
    var debug = 0;
    if (debug) console.log(message.data);
    //msgs.push(message);
    ctr++;
    if (ctr > 199 && MAXCTR) ws.close();

    obj = JSON.parse(message.data);

    if (obj["channel_name"] == "ticker.BTCUSD") {
        //console.log(obj); 
        //console.log(obj.ticker.last.value); 
        sset("C3", obj.ticker.last.value);
        sset("C4", obj.ticker.high.value);
        sset("C5", obj.ticker.low.value);
        sset("C6", obj.ticker.vwap.value);
        sset("C7", obj.ticker.vol.display_short);
        sset("C8", obj.stamp);
    }
    if (obj["channel_name"] == "depth.BTCUSD") {
        bestbids = Object.keys(book[2]).splice(-15, 15);
        bestasks = Object.keys(book[1]).splice(0, 15);

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
drawasks();
drawbids();
}

function drawasks() {
    var gs = "";var cum=0;
    for (row = 15; row > 0; row--) {
        gs += set_str("F" + row, bestasks[15-row]/100000);
        tval=book[ASK][bestasks[15-row]];
        cum+=tval;
        gs += set_str("G" + row, tval);
        gs += set_str("H" + row, cum);
    }
    LCexec(gs);
}

function drawbids() {
    var gs = "";var cum=0;
    for (row = 1; row < 16; row++) {
        gs += set_str("F" + (15+row), bestbids[15-row]/100000);
        tval=book[BID][bestbids[15-row]];
        cum+=tval;
        gs += set_str("G" + (15+row), tval);
        gs += set_str("H" + (15+row), cum);
    }
    LCexec(gs);
}







