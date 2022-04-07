//! array methods

let fruits = ["Apple", "Mango", "Tropical"];

//push - add at the end
console.log(fruits);
fruits.push("Avocado");

//unshift  - add at the beginning
console.log(fruits);
fruits.unshift("Pear");

console.log(fruits);

//pop - removes the last element
fruits.pop();
console.log(fruits);

//shift - remove the first element
fruits.shift();
console.log(fruits);

//splice - remove /insert elements at a specific position
//delete example
fruits.splice(1, 2);
console.log(fruits);

//insertion
fruits.splice(1, 0, "Maize");

//includes -checks if an array has the given item and returns true if yes and no if not.
fruits = ["Apple", "Mango", "Tropical"];
let hasApple = fruits.includes("Apple");
console.log(hasApple);

function arrayIncludes(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return true;
		}
	}
	return false;
}
let hasMango = arrayIncludes(fruits, "Mango");

//find and find index
let users = [
	{ name: "jay", email: "ajay@gmail.com" },
	{ name: "jayson", email: "j@gmail.com" },
	{ name: "pete", email: "pete@gmail.com" },
];

let jayson = users.find(function (user) {
	return user.name === "jayson";
});

let jayson2 = users.find((user) => user.name === "jayson");
console.log(jayson, jayson2);

function findUser(arr, name) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].name === name) {
			return arr[i];
		}
	}
	return undefined;
}

//use case
console.log(findUser(users, "jayson"));

//filter
let nameStartsWithJ = users.filter(function (user) {
	return user.name.startsWith("j");
});

let nameStartsWithJ2 = users.filter((user) => user.name.startsWith("j"));

console.log(nameStartsWithJ);

//TODO: Try your own version of filter without using the inbuilt filter method

//sort

//Transforming an array  (Map)
let emails = users.map((user) => user.email);
console.log(emails);

//TODO: Try your own version of map without using the inbuilt map method

//reduce
//find  the total sum of salaries amount = use a for loop
let salaries = [
	{ name: "John", amount: 700 },
	{ name: "Pete", amount: 450 },
	{ name: "Ann", amount: 800 },
	{ name: "Joy", amount: 500 },
]