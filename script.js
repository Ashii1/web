var burgor = document.querySelector(".burgor");
var nav=document.querySelector(".nav");

burgor.addEventListener('click',()=>{
 if (nav.style.display==="flex"){
    nav.style.display="none";

 }else{
    nav.style.display="flex";
    
 }
});



/*aboutus*/

var aboutus=document.querySelector("#aboutus");
aboutus.addEventListener('click',function(event){
event.preventDefault();
window.location.href="aboutus.html";

});