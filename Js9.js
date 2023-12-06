//block scope --inside {}--declare with let 
// {
//     let x=2;
//     console.log(x);   //2
// }
// console.log(x);   //give error because it's block scope 

//global scope ---declare with var
// {
//     var x=2;
//     console.log(x);   //2
// }
// console.log(x);   //2

//const also have block level scope means inside {}

{
    const x=10;
    console.log(x); //10
}
const x=5;
console.log(x);  //5