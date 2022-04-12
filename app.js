let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
};

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};


// let cities=[
//     "Brampton",
//     "Hamilton",
//     "London",
//     "Toronto",
//     "Markham",
//     "Ottawa",
//     "Richmond Hill",
//     "Kitchner",
//     "Windsor",
//     "Mississauga",
//     "Oshawa",
//     "Ajax",
//     "Whitby",
//     "Oakville",
//     "Scarborough",
//     "Thornhill",

// ];


// let cityNames=cities.sort();

// let input=document.getElementById("input");

// input.addEventListener("keyup",(e)=>{
//     removeElements();
//     for(let i of cityNames){
      
//     if(i.toLowerCase().startsWith(input.value.toLowerCase())&& input.value !=""){
//         let listItem=document.createElement("li");
//         listItem.classList.add("list-items");
//         listItem.style.cursor="pointer";
//         listItem.setAttribute("onclick","displayNames('"+ i + "')");
//         let word = "<b>" + i.substring(0,input.value.length)+ "</b>";
//         word+=i.substring(input.value.length);
//         listItem.innerHTML=word;
//         document.querySelector(".list").appendChild(listItem);
//     }
// }
// });

// function displayNames(value){
//     input.value=value;
//     removeElements();
// }

// function removeElements(){
//     let items=document.querySelectorAll(".list-items");
//     items.forEach((item)=>{
//         item.remove();
//     })
// }


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