const solution = (a ,b) => {
    let oddA = a % 2 === 1
    let oddB = b % 2 === 1
    
    if (oddA && oddB) {
        return Math.pow(a, 2) + Math.pow(b, 2)
    } else if (oddA || oddB) {
        return 2 * (a + b)
    } else {
        return Math.abs(a - b)
    }
}