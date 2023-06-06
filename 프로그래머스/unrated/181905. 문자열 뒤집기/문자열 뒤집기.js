const solution = (str, s, e) => {
    let reversed = str.slice(s, e+1).split('').reverse().join('')
    return str.replace(str.slice(s, e+1) , reversed)
}