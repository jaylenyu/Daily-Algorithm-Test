const solution = (arr, list) => {
    return arr.filter((el) => !list.includes(el))
}