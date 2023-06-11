const solution = (str) => {
    let result = str.split(/[abc]/).filter(Boolean)
    let emptyArr = ["EMPTY"]
    return result.length > 0 ? result : emptyArr
}