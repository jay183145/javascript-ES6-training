// function show(message) {
//     if(typeof message==="undefined"){
//         message="預設值"
//     }
//     console.log(message);
// }
// show("Hello");
// show();

let show=(message="預設值")=>{
    console.log(message);
};
show("Hello");
show();