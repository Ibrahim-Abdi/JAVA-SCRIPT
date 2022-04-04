//ARRAYS
//This is a list of items;

//declare an array

let users = ["Jane", "John", "Jack", "Jared", "Joy"];
console.log(users);

//accessing an item in the array - square bracket notation
let sampleUser = users[1];
console.log(sampleUser);

//get the length(count the number of items in the array)
let numOfUsers = users.length;
console.log(numOfUsers);

//get an element from the end of the array
let lastItem = users[users.length - 1];
console.log(lastItem);

//add an item to the array
// - at the end
users.push("Jayden");
console.log(users);

// - at the begining
users.unshift("JJ");
console.log(users);

let myForm = document.getElementById("userForm");

users = [];
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let userInput = document.getElementById("userInput").value;
  users.unshift(userInput);
  addNewUser(users);
  document.getElementById("userInput").value = "  ";
});

function addNewUser(users) {
  let markup = [];
  for (let i = 0; i < users.length; i++) {
    let listItem = `<li class="border-solid border-b-2 p-3 text-md">${users[i]}</li>`;
    markup.push(listItem);
  }
  let userList = document.getElementById("userList");

  userList.innerHTML = markup.join(" ");
}
addNewUser(users);