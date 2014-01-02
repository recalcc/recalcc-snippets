URLhost="oauthbouncer.herokuapp.com";
URLport=80;
URLpath="/proxy?hlocation=https://api.forecast.io/forecast/80565a37debfef3990beed42cc473355/42.1,12.1?units=si";
// http:// https://developer.forecast.io/docs/v2
o = JSON.parse(httpget(URLhost,URLport,URLpath));

gs="";
 
ctr = 2;
 
//called with every property and its value
function process(key,value) {
    console.log(key + " : "+value);
   gs+=set_str("A"+ctr,key); 
   gs+=set_str("B"+ctr,value);
ctr=ctr+1;
}
 
function traverse(o,func,label) {
    for (var i in o) {
        func.apply(this,[label+"."+i,o[i]]);  
        if (typeof(o[i])=="object") {
            //going on step down in the object tree!!
            traverse(o[i],func,label+"."+i);
        }
    }
}
 
//that's all... no magic, no bloated framework
 
traverse(o,process,"o");
LCexec(gs);