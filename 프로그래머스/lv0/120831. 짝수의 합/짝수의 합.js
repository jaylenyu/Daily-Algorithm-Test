const solution = (n) => {
    let result = 0;
    for (let i = 0; i <= n; i = i + 2) {
        result = result + i
    }
    return result
}