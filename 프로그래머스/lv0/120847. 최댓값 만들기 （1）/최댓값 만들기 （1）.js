const solution = (num) => {
     let numArr = num.sort((a, b) => b - a)
     return numArr[0] * numArr[1]
}