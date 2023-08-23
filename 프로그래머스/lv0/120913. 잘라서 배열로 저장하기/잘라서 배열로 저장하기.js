const solution = (str, n) => {
    let result = [];
    for (let i = 0; i < str.length / n; i++) {
        result.push(str.slice(i * n, (i + 1) * n))        
    }
    return result
}