// Using multiple conditional operators without proper indentation may make your code hard to read

function checkSign(num) {
    return (num === 0) ? "zero" 
    : (num > 0) ? "positive" 
    : "negative"; 
  }
  
  
  console.log(checkSign(10));
  console.log(checkSign(0));