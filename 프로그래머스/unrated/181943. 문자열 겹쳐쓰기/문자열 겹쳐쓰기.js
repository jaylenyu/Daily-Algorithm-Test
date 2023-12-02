function solution(str, overStr, s) {
    const result = [...str]
    result.splice(s, overStr.length, overStr)
    return result.join("")
}