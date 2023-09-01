const solution = (arr) => {
    let a = Math.max(...arr);
    return [a, arr.indexOf(a)]
}