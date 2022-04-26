
let answer = []
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return answer;
    } else {
        answer.push(startNum);
        return rangeOfNumbers(startNum +1, endNum) ;
    }
  };
  console.log(rangeOfNumbers(6, 9));