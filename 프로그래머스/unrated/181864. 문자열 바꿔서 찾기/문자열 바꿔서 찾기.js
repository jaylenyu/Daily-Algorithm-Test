const solution = (str, pat) => {
    let newStr = [...str].map((el) => el === 'A' ? 'B' : 'A').join("");
    return newStr.includes(pat) ? 1 : 0;
}
                              