const solution = (str) => {
    return str.split('').map((el) => +el).filter(el => el > 0).reduce((acc, curr) => acc + curr, 0)
}