//Functions in java 

function sum(x,y){
    s=x+y;
    return s;
   
}
let val=sum(4,165);
console.log(val);

//Arrow functions --the compact way of writing function
//functions can also stored inside variable

const res=(a,b)=> {
    console.log(a+b);
}
res(4,9);

const printHello= () =>{
    console.log("hello ji kaise hai aap sb");
};
printHello();
