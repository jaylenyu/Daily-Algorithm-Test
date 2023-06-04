const solution = (num, k) => {
    let arr = num.toString().split('')
    return arr.includes(k.toString()) ? arr.indexOf(k.toString()) + 1 : -1
}