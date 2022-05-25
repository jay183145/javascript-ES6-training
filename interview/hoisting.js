var x = 5;
console.log(x);

(function () {
  console.log(x);
  var x = 10;
  console.log(x);
})();

console.log(x);