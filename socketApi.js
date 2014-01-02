function onConnect() {
console.log("loaded");
var message = {
  "op": "subscribe",
  "channel": "24e67e0d-1cad-4cc0-9e7a-f8523ef460fe" // this is the market depth channel
};
conn.send(JSON.stringify(message));
}
function onError() {console.log("error");}
function onDisconnect() {console.log("disco");}
function onMessage(data) {console.log(data);}

function socketLoaded() {
conn = io.connect('https://socketio.mtgox.com/mtgox');     
conn.on('message', function(data) {       console.log(data)    });

conn.on('connect',    onConnect);
conn.on('disconnect', onDisconnect);
conn.on('error',      onError);
//conn.on('message',    onMessage);
 
}

loadScript("https://c9.io/recalcc/recalcc-snippets/workspace/Socket.IO.min.js",socketLoaded); 
