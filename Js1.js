// console.log("Ram Ram");

//object creation
let rectangle= {
    length:1,
    breadth:1
};



//factory method of object creation

function createRectangle(length,breadth){
    return rectangle= {
        // length:length,
        // breadth:breadth

        // you can also write as 
        length,
        breadth
    };
    
}

//creating multiple object using factory method
let rectangle1 = createRectangle(2,5); //output of createrectangle store in rectangle1
// console.log(rectangle1)
// 
// 
// 
// 

//constructor function 
function CreateSquare(l,b){
    this.length=l;
    this.breadth=b;
    this.draw=function(){
        console.log('Drawing')
    }
}
//object creation using constructor method 
let squareobject=new CreateSquare(5,9);
//console.log(squareobject);
//
//adding new feature to object
squareobject.color='blue';
console.log(squareobject);
//to delete/remove property 
delete squareobject.color;
console.log(squareobject);

//using constructor property 
console.log(squareobject.constructor); //this command gives the code from which the given constructor is formed

// Primitive type
let a={
    value:10
}
let b=a;  // b takes the address of a --copy is created because it is primitive data type 

a.value++;
console.log(a.value); //11
console.log(b.value); //11

//Reference type or passby Value

let c=10;
function increment(c){
    c++;
}
increment (c);
console.log(c); //10

//iterating through objects 

let recta={
    length:1,
    breadth:2
}
//for -in loop
for(let key in recta){
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
console.log(key,recta[key]);
}

//to check whether property exist in object or not
if('length' in recta){
    console.log('Present');
}
else{
    console.log('absent');
}
//presnt

if('hhhhhhhhhhh' in recta){
    console.log('Present');
}
else{
    console.log('absent');
}
//absent

//object cloning 

//iterartion
let src={
    a:10,
    b:20,
    c:30
};
let dest={};
for(let key in src){
    dest[key]=src[key];
}
console.log(dest); 
//{
//     "a": 10,
//     "b": 20,
//     "c": 30
// }
src.a++;
console.log(dest); 
//{
//     "a": 10,
//     "b": 20,
//     "c": 30
// }

//assign 
let src1={
    a:10,
    b:20,
    c:30
};
let dest1=Object.assign({},src1);
console.log(dest1);
//{
//     "a": 10,
//     "b": 20,
//     "c": 30
// }

//spread
let src2={
    a:40,
    b:50,
    c:60
};
let dest2={...src2};
console.log(dest2);
//{
//     "a": 40,
//     "b": 50,
//     "c": 60
// }

