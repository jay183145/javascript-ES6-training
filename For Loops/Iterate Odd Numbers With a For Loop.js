//For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.


const myArray = [];

for (let i = 1; i < 10; i+=2) {
  myArray.push(i);
}

console.log(myArray);