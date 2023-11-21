//Inbuilt object --Math

// console.log(Math.random());
// console.log(Math.PI)
// console.log(Math.round(1.8))
// console.log(Math.max(1,8,5,7,9,6));
// console.log(Math.min(1,8,5,7,9,6));
// console.log(Math.abs(-2))

//template literal--the way in whuch u want to print something
let hello=`hello"boss" ,how are u`;
console.log(hello);


// to print current date and time
let date=new Date()
console.log(date)

//ARRAY

//creation of array 
let numbers=[1,2,3,4,5];
console.log(numbers)

//to access array elements
console.log(numbers[2]);   // 3

//insertion of elements 

//to imsert at end 
numbers.push(6);
//to insert at beginning 
numbers.unshift(0);
//to insert at particular location 
numbers.splice(2,0,'a','b','c');

console.log(numbers); //[0, 1, 'a', 'b', 'c', 2, 3, 4, 5, 6]

//to know index of any element 
console.log(numbers.indexOf(2)); //5----because it's present 
console.log(numbers.indexOf(95)); //-1----because it's not present

// to remove element at begining 
numbers.shift();
//to remove element at last 
numbers.pop();
//to remove element at middle
numbers.splice(2,1);

console.log(numbers);

//Combining and slicing Arrays 

let first=[1,2,3];
let second=[4,5,6];
let combined=first.concat(second);
console.log(combined); //[1, 2, 3, 4, 5, 6]
let combined1=second.concat(first); 
console.log(combined1);  // [4, 5, 6, 1, 2, 3]

//slice
console.log(combined.slice(2,4)); // [3, 5]

//to create an copy 
let another=[...combined] //this is called spread operator
console.log(another)

//Iterating an Array 
      //using for loop 
let arr=[10,20,30,40,50];
for(let value of arr){
    console.log(value);
}

//using for each loop
arr.forEach(function(number){
    console.log(number)
});

//Joining of an array 
let numbers1=[10,20,30,40,50];
const joined=numbers1.join(',');
console.log(joined);   //10,20,30,40,50

//splitting 
let message='This is my first javascript class';
let parts=message.split(' ');
console.log(parts);

//sorting Arrays--convert into string 
 let number2=[40,60,30,70,25,15];
 number2.sort();
 console.log(number2)

//Filtering Arrays --to filter out data 
let number3=[1,2,-1,-4,5,9,-6];
let filtered=number3.filter(function(value){
    return value >=0;
});
console.log(filtered); //[1, 2, 5, 9]

//same code using arrow function method 
let filtered1=number3.filter(value => value >=0);
console.log(filtered1) //[1, 2, 5, 9]

//Mapping Arrays -map each elememnt of array to something else 
let arra=[7,8,9,10];
let items=arra.map(function(value){
    return 'student_no'+value; 
}
)
console.log(items); //['student_no7', 'student_no8', 'student_no9', 'student_no10']

//Mapping with objects 
