const solution = (str, alp) => {
    let ALP = alp.toUpperCase()
    return str.includes(alp) ? str.replaceAll(alp, ALP) : str
}
