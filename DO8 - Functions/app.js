// A deeper dive into functions

// define (declare functions)
function showMessage() {
    alert("Hello Everyone!!!");
}

// call the function (execute/invoke)
showMessage();

// scope - local and global variables

let age = 78;     // global variables
function displayAge() {
    let age = 67;   // local variables
    alert(age);      // 67
}
alert(age);   // 78
displayAge();


// parameters and arguments
function sayHi(name = "Jayson") {
    alert(' ${name} says hello');
}

sayHi();
sayHi("Jack");

// write a function greetings that takes in two inputs [from , text] that displays an alert showing "text from"

// greetings("ann", "hello")
// hello ann

function greetings(from, text) {
    alert(`${from}, ${text}`);
}
greetings("Hello", "Ann");

// Return statements
function add(a , b){
    return a + b;  // The results of running this function
}
let sum = add(4, 5);
console.log(sum);


// Example 2
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
// Infinity is a number
// - Infinity
checkAge();

// Fucntion expressions
let saysHello = function (name) {
    alert(name);
};
saysHello();

// Arrow function
const addTwo = (a, b) => a + b;

const checkAge = age => {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
const checkAge3 = (age) => (age > 18 ? true : false);

// Convets to Arrow functions
function greetings(from, text) {
    alert(`${from}, ${text}`);
}
greetings("Hello", "Ann");

const greetings2 = (from, text) => alert(`${from}, ${text}`);