const solution = (numbers, direction) => {
    let result = numbers
    if (direction === "right") {
        result.unshift(result.pop())
    } else {
        result.push(result.shift())
    }
    return result
}