const solution = (str) => {
    return [...str].map((el) => Number(el)).filter((el) => el >= 0).sort((a, b) => a - b)
}