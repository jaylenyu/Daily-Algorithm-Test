function solution(str, pat) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(i, i + pat.length))
    }
    return arr.filter(v => v.includes(pat)).length
}