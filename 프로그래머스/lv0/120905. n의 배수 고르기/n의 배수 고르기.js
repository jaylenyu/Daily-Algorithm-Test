const solution = (n, numlist) => {
    return numlist.filter(el => !(el % n))
}