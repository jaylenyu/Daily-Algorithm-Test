const solution = (a, b) => {
    let calNum1 = Number(`${a}` + `${b}`);
    let calNum2 = 2 * a * b
    return calNum1 > calNum2 ? calNum1 : calNum2
}

