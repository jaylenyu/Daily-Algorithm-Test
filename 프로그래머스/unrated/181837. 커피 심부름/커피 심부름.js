const solution = (order) => {
    let latte = order.map(el => el.includes("latte")).filter(el => el === true).length
    return order.length * 4500 + latte * 500
}