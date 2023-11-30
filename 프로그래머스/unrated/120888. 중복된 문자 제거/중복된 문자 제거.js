function solution(str) {
    let arr = [...str];
    let result = Array.from(new Set(arr)).join("")
    return result
}