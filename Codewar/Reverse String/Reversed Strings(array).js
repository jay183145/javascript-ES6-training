let reversedString = (words) => {
    let wordsArr = [...words];
    return wordsArr.reduce((acc, val) => {
        acc.unshift(val);
        return acc;
    },[])
}

console.log(reversedString('world'));

