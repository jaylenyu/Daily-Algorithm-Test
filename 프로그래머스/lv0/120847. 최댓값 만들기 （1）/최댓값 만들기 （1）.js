const solution = (num) => {
     let numArr = num.sort((a, b) => a - b)
     return numArr[numArr.length - 1] * numArr[numArr.length - 2]
}