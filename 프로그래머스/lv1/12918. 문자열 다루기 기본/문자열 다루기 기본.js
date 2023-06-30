const solution = (str) => {
    const condition = str.length === 4 || str.length === 6
    const regex = /[a-z]/gi
    return condition && str.search(regex) === -1 ? true : false
}