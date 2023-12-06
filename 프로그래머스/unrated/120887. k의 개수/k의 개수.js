function solution(j, k, l) {
    let result = [];
    for (let i = j; i <= k; i++) {
        result.push(i.toString().split(''))
    }
    return result.flat().filter(el => el == l).length
}