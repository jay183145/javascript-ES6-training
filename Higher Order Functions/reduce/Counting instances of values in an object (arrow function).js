const objcount = (names) => (names.reduce((objs, val) => {
    (val in objs)? objs[val]++ : objs[val] = 1 ;
    return objs;
    }, {}));

console.log(objcount(['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']));
console.log(objcount(['Bob', 'Bob', 'Bob', 'Bruce', 'Alice']));