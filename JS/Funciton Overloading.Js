function add() {
    console.log(5+5);
}
function add(a,b) {
    console.log(5+5);
}
function add(a,b,c) {
    console.log(5+5+5);
}
add();


//using Arguments
//Using Arguments

function add() {
    if (arguments.length === 0) {
    return "no arguments";
    }  // Adds two numbers
    else if (arguments.length === 2) {
        return arguments[0] + arguments[1];  // Adds two numbers
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];  // Adds three numbers
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];  // Adds four numbers
    } 
    else {
        return "Invalid number of arguments.";
    }
}

console.log(add());       // 
console.log(add(1, 2));    // 
console.log(add(1, 2, 3));  //
console.log(add(1, 2, 3, 4));   //



//Spread Operator

function add(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(add(1,2,3));//6
console.log(add(10,20,30));//60
console.log(add());//0