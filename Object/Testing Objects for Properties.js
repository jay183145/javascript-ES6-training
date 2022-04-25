function checkObj(obj, checkProp) {
    if (obj[checkProp] === undefined) {
      return "Not Found"
    } else {
      return obj[checkProp];
    }
  }
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));