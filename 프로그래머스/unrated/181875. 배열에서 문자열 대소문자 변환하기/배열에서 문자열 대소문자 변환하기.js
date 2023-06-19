const solution = (strArr) => {
    let result = [];
    for (let i = 0; i < strArr.length; i++) {
        i % 2 === 0 ? 
        result.push(strArr[i].toLowerCase()) 
        : 
        result.push(strArr[i].toUpperCase())
    }
    return result
}