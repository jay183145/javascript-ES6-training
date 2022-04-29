function century(year) {
    if ( year < 100 ) {
        return 1;
    } else if (year > 100 && year < 1000){
        const[a,b,c] = year.toString();
        if (b === "0" && c === "0") {
            return parseInt(a);
        } else {
            return parseInt(a)+1;
        }
    } else if (year > 1000 && year < 10000){
        const[a,b,c,d] = year.toString();
        if (c === "0" && d === "0") {
            return parseInt(a+b);
        } else {
            return parseInt(a+b)+1;
        }
    } else {
        return "over size";
    }
  }

  console.log(century(1900));
  console.log(century(2001));
  console.log(century(89));
  console.log(century(189));
  console.log(century(889));
  console.log(century(890));
  console.log(century(2010));
  console.log(century(201000));
