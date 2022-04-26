//The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
  console.log(checkEqual(1, 2));
  console.log(checkEqual(1, 1));