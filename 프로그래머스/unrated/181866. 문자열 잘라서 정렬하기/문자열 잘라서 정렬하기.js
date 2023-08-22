const solution = (str) => {
    return str.split("x").sort().filter(el => el.length > 0)
}