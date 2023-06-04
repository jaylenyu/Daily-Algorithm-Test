const solution = (num, k) => {
    let arr = num.toString().split('').map((el) => Number(el))
    return arr.indexOf(k) + 1 || - 1
}
