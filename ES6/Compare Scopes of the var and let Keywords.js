// function checkScope() {
//     var i = 'function scope';
//     if (true) {
//       i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }

function checkScope() {
    let i = 'Function scope';
    if (true) {
      let i = 'Block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log(checkScope());