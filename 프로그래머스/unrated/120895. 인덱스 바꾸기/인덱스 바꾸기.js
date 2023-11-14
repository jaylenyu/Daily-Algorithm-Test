const solution = (str, num1, num2) => {
    let arr = [...str]
    let temp = arr[num1]
    arr[num1] = arr[num2]
    arr[num2] = temp
    return arr.join('')
}