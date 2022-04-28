function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0)? true 
         : (flower1 % 2 !== 0 && flower2 % 2 === 0)? true 
         : false;
  }
  
  console.log(lovefunc(2,2));
  console.log(lovefunc(170,250));
  console.log(lovefunc(908,150));