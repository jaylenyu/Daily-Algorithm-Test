const solution = (s) => {
    let refactorString = s.toLowerCase().split('')
    let countP = refactorString.filter((el) => el.includes('p')).length
    let countY = refactorString.filter((el) => el.includes('y')).length
    return countP === countY ? true : false
}