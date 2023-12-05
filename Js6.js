//Events in Js

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked ");
//     let a=23;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// }

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked");
// })

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked--handlerr 2");
// })

// btn1.addEventListener("click",() =>{
//     console.log("button was clicked ---handler 3")
// })

// const hand2 = () => {
//     console.log("button was clicked--handlerr 2");
// };

// btn1.removeEventListener("click",hand2);

let modeBtn=document.querySelector("#mode");
let currNode = "light";



modeBtn.addEventListener("click", () => {
    if(currNode == "light"){
        currNode ="dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        console.log(currNode)
        document.querySelector("body").style.backgroundColor = "white";
    
    }
    })