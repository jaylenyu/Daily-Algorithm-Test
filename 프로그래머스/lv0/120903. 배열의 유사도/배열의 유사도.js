const solution = (s1, s2) => {
    let count = 0;
    let arr = s1.concat(s2).sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count += 1
        }
    }
    return count
}