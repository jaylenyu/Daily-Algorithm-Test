const solution = (arr) => {
    let sumArr = arr.reduce((acc, curr) => acc + curr, 0)
    let count = arr.length
    return sumArr / count
}