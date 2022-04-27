let answer = []
function filter_list(l) {
  for (let i = 0; i < l.length ; i++) {
    if (typeof l[i] === "number") {
      answer.push(l[i]);
    }
  }
  return answer;
  // Return a new array with the strings filtered out
}

console.log(filter_list([1,"a","b",0,15]));