const solution = (rsp) => {
    let result = [];
    let arr = rsp.split('')
    for (let i = 0; i < rsp.length; i++) {
        if (arr[i] === '0') result.push('5')
        if (arr[i] === '2') result.push('0')
        if (arr[i] === '5') result.push('2')
    }
    return result.join('')
}