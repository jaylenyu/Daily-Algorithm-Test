const solution = (str) => {
    const regex = /[a-k]/g;
    return str.replaceAll(regex, 'l')
}