//using if else statements
//student is eligible for voting
const age = 19;
if (age >= 18) {
    console.log("student is eligeble for voting");
}
else {
    console.log("student is  not eligeble for voting");
}
console.log("Thank you");

//write program number is positive or negative number
let num = -4;
if (num >= 0) {
    console.log("Positive number");
}
else {
    console.log("Negative number");
}
//write a program check number is positive , Nehgative, or Zero.
//use if else ladder

let number = -6
if (number > 0) {
    console.log("Positive Number");
}
else if (number < 0) {
     console.log("Negative Number");
}
else {
    console.log("Zero");
}
//Nested if -A student pass if marks >=60. if marks >= 80 shows "Distinction".
let marks = 89;
if (marks >= 60) {
    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("pass");
    }
}
else {
    console.log("Not Distinction");
}

//with Switch Statement
//print the grade based on letter 
let grade = 'C';

switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    case 'D':
        console.log("Poor");
        break;
    default: 
    console.log("Invalid Grade");   
}
//print the season based on  months int he year(3,4,5-summer),(6,7,8,9-rainy),(10,11,12,1,2-Winter).
let month = 5;

switch (month) {
    case 3:
    case 4:
    case 5:
    console.log("Summer");
    break;
    case 6:
    case 7:
    case 8: 
    case 9:
    console.log("Rainy");
    break;
    case 10:
    case 11:
    case 12: 
    case 1: 
    case 2: 
    console.log("Winter");
    break;
    default:
    console.log("No Season");
}

//Looping Constructs
//For Loop
//print first 10 Natural Numbers
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//while Loop
//print the numbers from  1 - 5 using while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//Do while loop
//print first five multiples of 5
let a = 1;
do {
    process.stdout.write(a * 5 + " ");
    a++;
} while(a <= 5);      //(instead of console.log - process.stdout.write)

// for.. of loop - print all vehicles 
let vehicles = ["car", "bus", "scotter", "train"];
console.log(vehicles);
for (let vehicle of vehicles) {
    console.log(vehicle);
}
//for ...in - pront all student from object
let student = {name: "Sai", age: 22, grade: "A"};
console.log(student);
for (let key in student) {
    console.log(key + ":" + student[key]);
    console.log(key);
    console.log(student.name);
    console.log(student.age);
}


