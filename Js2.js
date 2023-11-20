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

