function a() {
  console.log(1);
  b().then(function(){
    console.log(2);
  })
  console.log(3);
}

function b() {
  console.log(4);
  const result = new Promise((resolve,reject) => {
    setTimeout(function() {
      console.log(5);
      resolve(true)
    },1000);
    console.log(6);
  });
  return result;
}
a()