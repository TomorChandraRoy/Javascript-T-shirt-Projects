const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const closebutton = document.getElementById("close");

if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classList.add("active")
    })
};
if(closebutton){
    closebutton.addEventListener("click", ()=>{
        navbar.classList.remove("active")
    })
};