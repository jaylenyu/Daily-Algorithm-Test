const solution = (list) => {
    let arr = [];
    arr.push(list.filter((num) => num % 2 === 0).length)
    arr.push(list.filter((num) => num % 2 === 1).length)
    return arr
}