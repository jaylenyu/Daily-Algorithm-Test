const solution = (arr) => {
    let sortArr = arr.sort((a, b) => a - b)
    return sortArr[Math.ceil((sortArr.length - 1) / 2)]
}
