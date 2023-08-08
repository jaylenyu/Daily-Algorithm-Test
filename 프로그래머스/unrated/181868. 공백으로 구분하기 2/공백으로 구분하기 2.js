const solution = (str) => {
    return str.trim().split(' ').filter((word) => word.length > 0)
}