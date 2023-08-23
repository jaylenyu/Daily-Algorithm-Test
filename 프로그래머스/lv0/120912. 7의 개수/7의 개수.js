const solution = (arr) => {
    let result = arr.map(el => el.toString().split("")).flat().filter(el => el === "7")
    return result.length
}