// use to solve the problem that we don't know n

function factorial (n) {
    // 1.base case
        if (n == 1 || n == 0){
            return 1;
        }
    // 2. recursive call to itself
        else {
           return n * factorial(n-1);
        }
}

console.log(factorial(4));