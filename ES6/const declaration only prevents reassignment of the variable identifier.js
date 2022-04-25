// it is important to understand that objects (including arrays and functions) assigned to a variable using const
// Using the const declaration only prevents reassignment of the variable identifier.

// const s = [5, 6, 7];
// //s = [1, 2, 3];
// s[2] = 45;
// console.log(s);

//s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].

const s = [5, 7, 2];
function editInPlace() {
  // Using s = [2, 5, 7] would be invalid

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  
}
editInPlace();
console.log(s);
