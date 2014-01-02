serverpath="EXAMPLE.COM";

if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
  XMLHttpRequest.prototype.sendAsBinary = function(string) {
    var bytes = Array.prototype.map.call(string, function(c) {
      return c.charCodeAt(0) & 0xff;
    });
    this.send(new Uint8Array(bytes).buffer);
  };
}

//loadScript("http://recal.cc/r/misc/hist.js",function(){
loadScript("https://c9.io/recalcc/snippets/workspace/hist.js",function(){ // TODO: change

zz=SocialCalc.Formula.RangeTo2D("G6:G106").map(function(e){return e[0]}).join(",");
res=makeIt("5",zz);
console.log(res);
payload=(window.atob(res.split("data:image/png;base64,")[1]));
payload=((res.split("data:image/png;base64,")[1]));


function uploadPut(postUrl, paylo)
{
  var req = new XMLHttpRequest();
  req.open("PUT", postUrl);
  req.setRequestHeader("Content-type", "text/plain");
  req.setRequestHeader("Content-Transfer-Encoding", "base64");
  req.onload = function(event) { alert(event.target.responseText); }
//  req.send(new File(filePath));
  req.send(paylo);
}
serverpath=_c("B1");
console.log(serverpath);
//uploadPut(serverpath+"prova.png",payload);
postDURLToURL(serverpath+"prova.png", "prova.png", "prova.png", res, "image/png");
sset("A1",'<img src="'+res+'"/>');
opendivwin('<img src="'+res+'"/>',"test");


});