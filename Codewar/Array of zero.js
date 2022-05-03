let arrZero = (row, column) =>{
    let newArr = [];
    let zeroArr = [];
    for (let i = 0 ; i <= column-1; i++) {
        zeroArr.push(0);
    }

    for (let j = 0 ; j <= row ; j++) {
        newArr.push(zeroArr);
    }
    return newArr
}

console.log(arrZero(5,3));