function findLongestWordLength(str) {
    let newArr = str.split(" ");
    let m = 0;
    for (let i = 0; i<=newArr.length-1; i++){
      if (newArr[i].length > m) {
        m = newArr[i].length
      }  
    }
    return m;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));