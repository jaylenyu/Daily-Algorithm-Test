const solution = (num_list, n) => {
    let newNum_list = [];
    for (let i = 0; i < num_list.length; i++) {
        if (i % n === 0) newNum_list.push(num_list[i])
    }
    return newNum_list
}