const solution = (n) => {
    let numArr = [];
    for (let i = 1; i < n + 1; i++) {
        if (n % i === 0) {
            numArr.push(i)
        }
    }
    return numArr.reduce((acc, curr) => acc + curr, 0)
}