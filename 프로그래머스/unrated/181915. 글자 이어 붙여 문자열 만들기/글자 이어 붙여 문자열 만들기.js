const solution = (str, list) => {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(str[list[i]])
    }
    return result.join('')
}