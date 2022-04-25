let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
//console.log(i);  i is not defined
//i is not defined because it was not declared in the global scope. It is only declared within the for loop statement