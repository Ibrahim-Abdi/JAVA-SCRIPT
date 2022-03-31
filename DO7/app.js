// ARRAYS
// This a list of items

// declare an arrays

let users = ["Jane", "John", "Jack", "Jared", "Joy"];
console.log(users);

// access an item in the array -square bracket notation
let sample = users[3];

// get the length
let numOfUsers = users.length;

// add a new item to the array
// at the end --push
users.push("Jayden");
console.log(users);

// at the beginning
users.unshift("JJ");
console.log(users);

let myForm = document.getElementById("userForm");

// events
myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newUser = document.getElementById("userInput").value;
   users.push(newUser);
   addUser(users);
});

function addUser(users) {
    let markup = [];
    for (let i = 0; i < users.length; i++) {
        markup.push('<li>${users[i]}</li>');
    }
    let list = document.getElementById("userList");
    list.innerHTML = markup.join(" ");
}
addUser(users);