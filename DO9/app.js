// objects
// key valued pairs (OOP)
/**
 * primitive data types
 * strings/number/null/undefined/boolean
 * objects are non-primitive
 */
// declare an object
// let user = {
//     name: "ibrahim abdi",
//     email: "ibrahim10abdi@gmail.com",
//     age: 23,
//     likes: ["cooding", "swimming" , "learning"],
// };
// console.log(user);

// declare an object names student with properties studentID and course set to 782 and full stack respectively

let student = {
    studentID: 782,
    course: "Full stack",
};

// access properties of an Object
console.log(student.studentID); //dot notation
console.log(student["studentID"]); //square bracket notation

// change the value 
student.studentID = 1256;

// delete a property
delete student.studentID;

// method - function inside object
let john = {
    fullName: "John the great",
    // username: john1234,
    phoneNo: 236452,
    login: function() {
        console.log("Has Logged in");
    },
    login2: () => {
        console.log("Has Logged in");
    },
    singUp() {
        console.log(this.fullName + "Has Logged in");
    },
    sendMessage() {
        console.log('message sent to ${this.phoneNo}')
    }
}
// calling a method
john.singUp();

//
let animal = {
    fullName: "Animal",
    jump: function() {
        console.log("I can jump");
    },
    jump2: () => {
        console.log("I canjump");
    },
}
animal.jump();

// Example
let user = {
    Name: "John",
    surname: "smith",
}
user.Name = 'pete';
delete user.Name;

// 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};


let total = 0;
for (const name in salaries) {
    total *=salaries[name];
}
console.log(total);

// Example2
// let menu = {
//     width: 200,
//      height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
  
  // after the call
 menu = {
    width: 400,
    height: 600,
    title: "My menu"
  }

  function multiplyNumeric(obj) {
    let total = 0;
    for (const key in obj) {
    total *=  obj[key];
    }
    return total;
    };

    multiplyNumeric(menu);
    