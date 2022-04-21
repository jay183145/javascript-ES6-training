// statement(s) are executed until a break is encountered
function sequentialSizes(val) {
    let answer = "";
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;     
    }
    console.log(answer);
  }
  
  sequentialSizes(1);
  sequentialSizes(8);
  sequentialSizes(5);