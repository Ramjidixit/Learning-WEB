//Generate random color

let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    let h2=document.querySelector("h2");
    let randomColor=getRandomColor();

    h2.innerText=randomColor;

    let div=document.querySelector(".box")
    div.style.backgroundColor=randomColor;

    console.log("color updated");

})

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`
    return color;
}