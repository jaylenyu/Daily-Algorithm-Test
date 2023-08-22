const solution = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.slice(i, str.length))
    }
    return result.sort()
}