t = document.querySelectorAll(".title_wrap")
u = document.querySelectorAll("[type='hidden']")

otxt="[playlist]\nNumberOfEntries=";
c=0;
mtxt="";
for (ea in u) {
    try {
    c++;
    console.log(u[ea].value + " " + t[+ea + 1].innerText);
    mtxt+="File"+c+"="+u[ea].value+"\nTitle"+c+"="+t[+ea + 1].innerText+"\n";
    } catch(e) {}
}
otxt+=c+"\n"+mtxt;


function downloadWithName(data, name) {
    
    var uri = "data:x-application/text," + escape(data);

    function eventFire(el, etype){
        if (el.fireEvent) {
            (el.fireEvent('on' + etype));
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    eventFire(link, "click");

}

downloadWithName(otxt,"ur.pls");


alert("K");

return (0);