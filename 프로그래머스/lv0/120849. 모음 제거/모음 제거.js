const solution = (str) => {
    let regex = /[aeiou]/gi
    return str.replace(regex, '')
};
