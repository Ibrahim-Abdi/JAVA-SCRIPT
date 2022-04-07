//FUNCTIONS
//Reusable pieces(groups) of code;

//declare function
function prepareChicken() {
	//function body
	console.log("Gather ingredients");
	console.log("Marinate the chicken");
	console.log("Cook onions and tomatoes");
	console.log("Add the chicken and wait for 45mins");
}

//execute , invoking, calling
prepareChicken();

//add two numbers
//a and b are parameters
function sum(firstNumber, lastNumber) {
	console.log(firstNumber + lastNumber);
}

//20 and 4 are arguments
sum(20, 4);
sum(10, 24);
sum(70, 94);

function sayHi(name) {
	alert("Hello there " + name);
}

sayHi("John");
sayHi("Jane");
sayHi("Stan");