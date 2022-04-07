let role = prompt("User role");
if(role == "Admin"){
    console.log(101);
} else if(role == "Student"){
    console.log(301);
}else if(role == "Trainer"){
    console.log(406);
}else if(role == "Faculty"){
    console.log(109);
}else{
    console.log(000);
}

// switch statement
switch (role) {
    case "admin":
        console.log(101);
        break;
    case "student":
        console.log(301);
        break;
    case "trainer":
        console.log(406);
        break;
    case "facalty":
        console.log(109);
        break;
    default:
        console.log(0);    
}

// logical operators 
// and operator (&&) - evaluate to true if all statements evaluate to true. if any of the atatements is false the whole evaluate

let age = 15;

if (age > 18 && age <= 35){
    console.log("PASS");
}
let username = "ibrahim";
let password = "123Asd";
let usernameInput = prompt("Enter username");
let passwordInput = prompt("Enter password");

if (usernameInput === username && passwordInput === password){
    alert("Authenticated");
} else {
    alert("Something went wrong please try again");
}

// or operator (||)
// eveluate if any of the statement is true, if all statements are false it will evaluate to false.

let hasParentalPermision = true;
if(age > 18 || hasParentalPermision){
    alert("You are allowed");
} else {
    alert("Seek parental permision");
}

//Write a javascript program to process loans based on the following scenarios
//1. an applicant is eligible for a loan if they have a good credit score and high income
//2. an applicant is eligible for a loan if they have a good credit and do not have a criminal record
//3. an applicant is eligible for a loan if they have a good credit score or high income
// Not (!) - negates(flips) the current value
let hasGoodCredit = true;
 let hasCriminalRecord = false;
 let hasHighIncome = true;

// 2
if(hasGoodCredit && !hasCriminalRecord){
    console.log("Eligible for a loan");
} else {
    console.log("NOT Eligible for a loan");
}

// 1
if(hasGoodCredit || hasHighIncome){
    console.log("Eligible for a loan");
} else {
    console.log("NOT Eligible for a loan")
}

// 3
// // if(hasGoodCreditScore !hasHighIncome){
//     console.log("Eligible for a loan")
// } else {
//     console.log("NOT Eligible for a loan");
// }

// Tenary operator (?)
if (age > 18) {
    console.log("Allowed");
} else {
    console.log("Not allowed");
}
