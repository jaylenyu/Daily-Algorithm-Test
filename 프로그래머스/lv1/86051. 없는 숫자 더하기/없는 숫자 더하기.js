const solution = (numbers) => {
    const sum = 45;
    let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0)
    return sum - sumNumbers
}