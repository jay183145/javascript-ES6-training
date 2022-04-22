// function show(message) {
//     if(typeof message==="undefined"){
//         message="預設值"
//     }
//     console.log(message);
// }
// show("Hello");
// show();

// let show=(message="預設值")=>{
//     console.log(message);
// };
// show("Hello");
// show();

let f=(n1,n2=5)=>{
    console.log(n1*n2);
}
f(3,1);
f(8);
