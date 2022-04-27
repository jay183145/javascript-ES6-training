const flatten = (arr) => (arr.reduce((prevArr, nextArr) => (prevArr.concat(nextArr))))

console.log(flatten([[0, 1], [2, 3], [4, 5]]));


