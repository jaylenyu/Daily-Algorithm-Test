const solution = (list) => {
    let evenArr = [];
    let oddArr = [];
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            evenArr.push(list[i])
        } else {
            oddArr.push(list[i])
        }
    }
    return +evenArr.join("") + +oddArr.join("")
}