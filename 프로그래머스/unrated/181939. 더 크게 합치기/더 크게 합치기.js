const solution = (a, b) => {
    let numberA = Number(a.toString().concat('',b.toString()));
    let numberB = Number(b.toString().concat('',a.toString()));
    if (numberA > numberB) {
        return numberA
    } else if (numberB > numberA) {
        return numberB
    } else {
        return numberA
    }
}