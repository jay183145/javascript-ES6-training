// The next type of loop you will learn is called a do...while loop.
// It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
// Essentially, a do...while loop ensures that the code inside the loop will run at least once.

const myArray = [];
let i = 10;

do {
  myArray.push(i);
  i++;
} while (i<10);

console.log(i);
console.log(myArray);