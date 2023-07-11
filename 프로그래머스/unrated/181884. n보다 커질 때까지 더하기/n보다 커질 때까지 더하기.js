const solution = (numbers, n) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (sum < n + 1) {
            sum += numbers[i]
        }
    }
    return sum
}