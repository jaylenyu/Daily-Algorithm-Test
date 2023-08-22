const solution = (list, finished) => {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < finished.length; j++) {
            if (i === j && finished[j] === false) {
                result.push(list[i])                
            }
        }
    }
    return result
}