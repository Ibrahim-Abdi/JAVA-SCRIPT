/**
 * Iteration and loops
 * --perform repetitive tasks
 * while loop
 * do while
 * for loop
 */

// start condition , terminating statement 
let i = 1;

while(i <= 10){
    console.log(i);
    i = i + 1;
}

let j = 1;
while(j <= 10){
    document.write('<img src="img.jpg" width="400px" height="200px" />');
    j = j + 1;
}

// for loop
for(let i = 0; i < 10; i = i ++){
    console.log(i);
}

for(let j = 1; j <= 10; j = j ++){
    document.write('<img src="ig.jpg" width="400px" height="200px" />');
}

// using a for loop, the modulus operator, a comparison operator and if statements writre a for loop to log on the console even numbers between 0 to 100

for(let x = 0; x <= 100; x++){
    if (x % 2 == 0){
        console.log(x);
    }
}

// write a program that iterates from 0 to 100 and 
// 1. if a number is divisible by 3 output "Fizz"
// 2. if a number is divisible by 5 output "Buzz"
// 3. if a number is divisible by both 5 and 3 output "FizzBuzz"
// 4. if its divisible by neither output the number

for (let x = 1; x < 100; x++){
    if(x % 5 == 0 && x % 3 == 0){
        console.log("FizzBuzz");
    }else if( x % 5 == 0) {
        console.log("Buzz");
    } else if (x % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(x);
    }
}

// write a loop  which a prompt for a number greater that 100. If the visitor enters another number - ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels thr input enters an empty line.

// Here we can assume that the visitor only inputs numbers. There's no need to implements a special handling for a non- numeric input in this task.

