const solution = (str, n) => {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        newArr.push([...str][i].repeat(n))
    }
    return newArr.join("")
}