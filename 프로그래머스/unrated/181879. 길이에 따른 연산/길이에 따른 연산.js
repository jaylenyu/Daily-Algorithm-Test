const solution = (list) => {
    if (list.length > 10) {
        return list.reduce((a, b) => a + b)
    } else {
        return list.reduce((a, b) => a * b)
    }
}