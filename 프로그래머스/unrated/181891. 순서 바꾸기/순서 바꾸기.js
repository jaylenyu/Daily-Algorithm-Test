const solution = (list, n) => {
    return list.slice(n).concat(list.slice(0, n))
}