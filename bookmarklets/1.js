alert("ok");
t=document.querySelectorAll(".title_wrap")
u=document.querySelectorAll("[type='hidden']")

for (ea in u) {
console.log(u[ea].value + " " + t[+ea+1].innerText); }

alert(1);
return(0);