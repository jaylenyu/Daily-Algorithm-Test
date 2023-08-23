const solution = (q, r, code) => {
    let result = [];
    for (let i = 0; i < code.length / q; i++) {
        result.push(code.slice(q * i, q * (i + 1)))
    }
    return result.map(el => el[r]).join("")
}