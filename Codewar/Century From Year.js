function century(year) {
    const [...arr] =year.toString();
    if (year < 100) {
        return 1;
    } else {
        if (arr[arr.length-1] === "0" && arr[arr.length-2] === "0") {
            //pop out last two element
            arr.pop(arr[arr.length-1]);
            arr.pop(arr[arr.length-2]);
            // concate array
            const answer = arr.join("");
            //convert to number
            return parseInt(answer);
        } else {
            //pop out last two element
            arr.pop(arr[arr.length-1]);
            arr.pop(arr[arr.length-2]);
            // concate array
            const answer = arr.join("");
            //convert to number
            return parseInt(answer)+1; 
        }
    }
  }
  
// Best answer
// const century = year => Math.ceil(year/100)

  console.log(century(1900));
  console.log(century(2001));
  console.log(century(89));
  console.log(century(189));
  console.log(century(889));
  console.log(century(890));
  console.log(century(2010));
  console.log(century(201000));
  console.log(century(201001));
