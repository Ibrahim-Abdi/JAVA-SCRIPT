//null - reference to something that does not exist;
let username = null;

//undefined - a variable that has not been assigned
let age;

//Strings
//declaration
let email = "ibrahim10abdi@gmail.com";
let message = "Hello, There";

//concatenation  - addind strings together
let greeting = "Hello " + "There";
console.log(greeting);

//Length of a string
let lengthOfEmail = email.length;
console.log(lengthOfEmail);

//getting characters
let languauge = "PYTHON";
console.log(languauge[3]);
console.log(languauge.charAt(0));

// uppercase
let ucName = email.toUpperCase();
console.log(ucName);
//lowercase
let lcName = email.toLowerCase();
console.log(lcName);

//slice
let name = "Jack of all trades";
let name1 = name1.slice(0, 5);
console.log(name1);
console.log(name2);

//includes
let hasAll = name1.includes("ball");
console.log(hasAll);

//template strings
let firstName = "Dwayne";
let sentence = `Hello how are you ${firstName}`;
console.log(sentence);

let myApp = `
<div>
<h1>Hello i am ibrahim</h1>
</div>
`;
document.write(myApp);

/**
 * operations
 */
let a = 10;
let b = 34;

//addition
let sum = a + b;
console.log(sum);

//subtraction
let diff = a - b;
console.log(diff);

//multiplication
let product = a * b;
console.log(product);

//division
let result = a / b;
console.log(result);

//exponential
let exp = a ** b;
console.log(exp);

// modulus - remainder operator
let rem = a % b;
console.log(rem);

let userAge = prompt("What is your age? ");
// console.log(userAge);

//write a program that asks the user to enter their age and outputs the year they were born in
console.log(2022 - userAge);