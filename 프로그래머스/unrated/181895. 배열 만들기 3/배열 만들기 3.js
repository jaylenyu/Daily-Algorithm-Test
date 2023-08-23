const solution = (arr, int) => {
    let result = [];
    for (let i = 0; i < int.length; i++) {
        result.push(arr.slice(int[i][0], int[i][1] + 1))
    }
    return result.flat()
}