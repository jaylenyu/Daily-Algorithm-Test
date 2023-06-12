const solution = (n, k) => {
    let meal = 12000 * n
    let drink = 2000 * k
    let discount = parseInt(n / 10) * 2000
    return meal + drink - discount
}
