const solution = (n, numlist) => {
    return numlist.filter((el, idx) => !(el % n))
}