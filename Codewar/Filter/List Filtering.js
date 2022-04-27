
function filter_list(l) {
    return l.filter((el) => typeof(el) === "number");
  // Return a new array with the strings filtered out
}

console.log(filter_list([1,"a","b",0,15]));