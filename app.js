var menu=document.querySelector('#menu-icon');
var navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};

function handleClick(choice) {
    var hiring=document.getElementById("hourly-rate");
   console.log(choice.value);
    if (choice.value==="3"){
        hiring.classList.remove("hidden");
    }
    else {
        hiring.classList.add("hidden");
    }
}