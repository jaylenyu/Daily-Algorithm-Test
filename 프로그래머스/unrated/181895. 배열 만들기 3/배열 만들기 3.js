const solution = (arr, intervals) => {
    let answer = [arr.slice(intervals[0][0],intervals[0][1] + 1)];
    let result = [];
    for (let i = 0; i < intervals.length; i++) {
        result.push(arr.slice(intervals[i][0], intervals[i][1] + 1))
    }
    return result.flat()
}