const sum = (...args) => (args.reduce((acc, val) => (acc + val),0))

console.log(sum(5, 4, 6, 3, 2, 1 ));
console.log(sum());