const solution = (a, b) => {
    let calNum1 = Number(`${a}` + `${b}`);
    let calNum2 = 2 * a * b
    if (calNum1 === calNum2) {
        return calNum1
    } else if (calNum1 > calNum2) {
        return calNum1
    } else if (calNum2 > calNum1) {
        return calNum2
    }
}

