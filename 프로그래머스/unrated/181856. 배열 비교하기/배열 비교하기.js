const solution = (arr1, arr2) => {
    let isArr1Longer = arr1.length > arr2.length
    let isSame = arr1.reduce((a, b) => a + b) === arr2.reduce((a, b) => a + b)
    let isArr1Big = arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b)
    
    if(arr1.length === arr2.length) {
        if (isSame) return 0
        if (isArr1Big) return 1
        if (!isArr1Big) return -1
    }
    if (isArr1Longer) return 1
    if (!isArr1Longer) return -1
}