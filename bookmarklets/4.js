x=((document.querySelectorAll("table")[2].innerText.split("\n"))).map(function(e){return e.split("\t")}).map(function(e){return e[0]}).map(function(e){return e.split(" ")[1]});
console.clear();
console.log(x);
function httpget(host,port,path)
{
console.log("GET "+host+" "+port+" "+path);
 if(typeof(port)==='undefined') port = 80;
 if(typeof(path)==='undefined') path = "/";
var hres="";
		 try { if (typeof this.navigator != 'undefined') {
			  var request = new XMLHttpRequest();
			  request.open('GET', "http://"+host+":"+port+path, false);
			  // request.timeout = 5000; FUCK OFF
			  request.send(null);
			  hres = request.responseText;
		  } else {
			  var req = http_sync.request({
				  host: host,
				  port: port,
				  path: path,
			  });
			  var res = req.end();
			  hres = res.body.toString();
		  } }
catch(e) {hres="Exception, check your params and connectivity. Use proxy on port 8012 to get around Cross origin issues. Exception: " +JSON.stringify(e);}
return (hres);
}
for (ea in x) {
console.log(httpget("us",8042,"/HSET/PR/"+x[ea]+"/"+x[ea])    );
console.log(httpget("us",8042,"/3/SET/PR_"+x[ea]+"/"+x[ea])    );
console.log(httpget("us",8042,"/3/EXPIRE/PR_"+x[ea]+"/"+3600*24)    );

    /* 
    
    javascript:(function()%7Bfunction callback()%7B_a_a_%3D1%7Dvar s%3Ddocument.createElement("script")%3Bs.src%3D"https%3A%2F%2Fc9.io%2Frecalcc%2Frecalcc-snippets%2Fworkspace%2Fbookmarklets%2F4.js"%3Bif(s.addEventListener)%7Bs.addEventListener("load"%2Ccallback%2Cfalse)%7Delse if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
    
    
    */
    
    
    
}
alert("ok");