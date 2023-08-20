const solution = (arr, n) => {
    let newArr = arr;
    let isEven = (arr.length % 2 === 0)
    if (isEven) {
        for (let i = 1; i < arr.length; i += 2) {
            arr[i] += n
        }
    }
    if (!isEven) {
        for (let i = 0; i < arr.length; i += 2) {
            arr[i] += n
        }
    }
    return newArr
}