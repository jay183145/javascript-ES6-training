let reversedString = (words) => {
    let wordsArr = [...words];
        wordsArr.reduce((acc, val) => {
        acc.unshift(val);
        return acc;
    },[])
    return wordsArr.join('') 
}

console.log(reversedString('world'));
