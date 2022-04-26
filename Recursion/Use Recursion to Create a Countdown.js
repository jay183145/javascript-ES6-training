let answer = []
function countdown(n){
    if (n <= 0) {
      return answer;
    } else {
        answer.push(n);
        return countdown(n-1);
    }
  }

//   console.log(countdown(5));
//   console.log(countdown(-1));
  console.log(countdown(10));