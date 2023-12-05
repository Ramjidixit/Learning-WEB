//functions-a block of code that fullfills  a specific task 

function print(){
    console.log('Hello i,m learning about js');
}
//function call or invoke 
print();


// result();--cannot be called here because its assigned
//function assignement
let result=function learn(){
    console.log("I am learning ");
};
result();
// learn();--this can not be called 

//Anonymous function assignment
let result1=function(){  //without function name
    console.log("I am learning ");
};
result1();

function sum(a,b){
    return a+b;
}
console.log(sum(1,2)); //3
console.log(sum(1,2,3,4,5));  //3

//to did sum of all
function sum1(a,b){
    let total=0;
    for(let value of arguments)
        total=total+value;
    return total;
}
let ans=sum1(1,2,3,6,5,8,1);
console.log(ans); //26

//Rest Operator 
function sum2(...args){
    console.log(args)    //[1, 2, 3, 4, 5, 6, 7, 8, 9]
}
sum2(1,2,3,4,5,6,7,8,9);

function sum3(a, ...args){
    console.log(args)   //[2, 3, 4, 5, 6, 7, 8, 9]
}
sum3(1,2,3,4,5,6,7,8,9);

function interest(p,r,t){
    return p*r*t/100;
}
console.log(interest(1000,10,15));  //1500

//if user does not pass value then we give default parameter to that value 

function interest1(p,r,t=4){
    return p*r*t/100;
}
console.log(interest1(1000,5));

let person={
    fname:'ram',
    lName:'dixit',
    get fullName() {
        return `${person.fname} ${person.lName}`;  
    },
    set fullName(value){
       let parts=value.split(' ');
       this.fName=parts[0];
       this.lName=parts[1];
    }
};
console.log(person)

// function fullName(){
//     return `${person.fname} ${person.lName}`;  
// }
// console.log(fullName())  //ram dixit

console.log(person.fullName);
person.fullName='Rajeev malhotra'
console.log(person.fullName);

//try and catch block --for error handling 
// try{
//     person.fullName=raj;
// }
// catch(e){
//     alert('you have send a number');
// }
// finally{
//     console.log("hello");
// }

//Reducing an array 
//normal method
let arr=[1,2,3,4];
let total=0;
for(let value of arr)
    total=total+value;

console.log(total);  //10

//using same with reduced method
let totalSum=arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);  // 10

