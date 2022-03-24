//null - reference to something that does not exist;
// let username = null

//undefined - a variable that has not been assigned;
let age;

//strings
//declaration
let email = "dirhamky@example.com";
let message = "Hello, here";

//concatenation
let greeting = "Hello" + "There";
console.log(greeting);

//length
let lengthOfEmail = email.length;
console.log(lengthOfEmail);

//getting characters
let lang = "PYTHON";
//index
console.log(lang[0]);
console.log(lang[lang.length - 1]);
//uppercse
let ucName = lang.charAt(7);

//sclice
let name1 = "jack of all trades";
let name2 = name1.slice(4, 9);
console.log(name1);
console.log(name2);

//templete strings

let firstName = "Dwayne";
let sentence = 
`Hello how are you ${firstName}
${90 + 100}`;
console.log(sentence)


let myProject =`
<div>
<h1>Hello i am Dirhamky.</h1>
</div>
`;

document.write(myProject)

//numbers
//let a = 10;
//let b = 34;

//addition
// let sum = a + b;
// console.log(sum);

//subtraction
// let diff = a - b;
// console.log(diff);

//multiplication
// let product = a * b;
// console.log(product);

//division
// let result = a/ b;
// console.log(result);

//exponential
// let exp = a ** b;
// console.log(exp);

//modulus - remainder operator
// let rem = a % b;
// console.log(rem);
/**
 * p-parenthesis
 * e-exponential
 * m-mal
 * d-div
 * a-add
 * s-sub
 */

prompt("What is your age?");
// let userAge = prompt("What is your age?");
// console.log(userAge);


//write a program tha tasks the user to enter their age and outputs the year they were born in
var year = 2022 - prompt("What is your age?"); 
console.log(year);

//comparison operators

let a = 7;
let b = 8;

//gt
console.log("---gt---");
console.log(a <= b);

//lte
console.log("---lte---");
console.log(a <= b);

//eq
console.log("---eq---");
console.log(a == b);

//indentical (strict equality)
console.log("---seq---");
console.log(a === b);

//conditional statements - you can be able tp excute a certain block of code based on condition (if);
let username = "dirhammky";
let password = "123Asd";

let usernameInput = prompt("Enter username");
let passwordInput = prompt("Enter password");

//username Check;
if (usernameInput == username) {
    alert("Username correct enter password");
    let passwordInput = prompt("Enter password");

    if(passwordInput == password){
        alert("Welcome ON BOARD");
        } else{
            alert("Wrong password Try again");
        }
}else {
    alert("Wrong username please try again");
}
let userAge = prompt("What is your age? ");

if(userAge >= 18) {
    alert("adult");
} else {
    alert("child");
}
if(userAge < 18){
    console.log("child");
}else if(userAge <= 35) {
    console.log("youth");
}else {
    console.log("adult");
}

let Role = prompt("User Role");
if(Role == "Admin"){
    console.log(101);
} else if(Role == "Student"){
    console.log(301);
}else if(Role == "Trainer"){
    console.log(406);
}else if(Role == "Faculty"){
    console.log(109);
}else{
    console.log("000");
}

//Write a javascript program to precess loans based on the following senarios

//1. An Application is eligible for a loan if they have a good credit score and high income 

//2. An Application is eligible for a loan if they have a good credit and do not have a criminal record 

//3.An Application is eligible for a loan if they have a good credit score or high income



//switch