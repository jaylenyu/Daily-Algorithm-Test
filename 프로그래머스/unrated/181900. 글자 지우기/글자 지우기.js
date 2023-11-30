const solution = (str, indices) => {
    let newStr = [...str];
    let result = newStr.map((el, i) => indices.includes(i) ? "" : el).join("")
    return result
}