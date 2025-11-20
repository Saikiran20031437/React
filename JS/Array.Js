//Array
let even = [2,4,6,8];
console.log(even[3]);
console.log(even);

//using Constructor
let odd = new Array(1,3,5,7);
console.log(odd[3]);
console.log(odd);

const st_info = [117,22,"SAI",7.7,false];
console.log(st_info);

let Name = new Array("Sai","Sudhir","praveen");
console.log(Name[2]);
console.log(Name.indexOf("Sai"));

//inbuilt Methods in Array
//Adding
Name.push("chotu");//ending
console.log(Name);
Name.unshift("sai");//begining
console.log(Name);

//removing
Name.pop();//ending
console.log(Name);
Name.shift("sai");
Name.shift();//begining
console.log(Name);

//Splice

even = [2,4,6,8];
console.log(even);

//splice-array.splice(start index,delete count,item1,item2...)
even.splice(0,3,'Sai',true,8.0);
console.log(even);

//splice - array.splice(start index, deleteCount, item1, item2, ...)
even.splice(1, 2, "red", 10.5, true);
console.log(even);// [2, red, 8, 10]


//slice
const nums = [1, 2, 3, 4, 5];
const newArr = nums.slice(1, 4); // start ...... end (n-1)
console.log(newArr);
console.log(nums);

//position of index value
const letters = ['d','e','b','a','c'];
console.log(letters.indexOf('c'));
console.log(letters.indexOf('a'));
//include method it returns boolean value
console.log(letters.includes('d'));
console.log(letters.includes('r'));
//sort
console.log(letters);
console.log(letters.sort());//ascendinng order
//reverse
console.log(letters.reverse());//descendinng order

//for each loop(iteration methods)
let fruits = ["apple", "Guva", "banana"];
fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => process.stdout.write(fruit + " "));


//map function
let numbers = [1,3,5,7];
let square = numbers.map(num => num * num);
console.log(square);
console.log(numbers);

//filter
let numberf = [1,2,4,6,7,9];
let evennumbers = numberf.filter(num => num % 2 === 0);
console.log(evennumbers);
console.log(numberf);

//concat
let arr1= [1,2];
let arr2= [3,4];
let combined = arr1.concat(arr2);
console.log(combined);

//join
let names = ["Sai", "praveen", "sudha"];
let a = names.join("@");
console.log(names);
console.log(a);

//Destucting Array-(Es6)
let electronics = ["Fan", "Light", "Laptop"];
const [d, b, c] = electronics;
console.log(b); 
console.log(d); 