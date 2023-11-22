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
