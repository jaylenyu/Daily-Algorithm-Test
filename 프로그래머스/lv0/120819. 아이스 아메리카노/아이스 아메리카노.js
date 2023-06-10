const solution = (money) => {
    let coffee = 5500;
    let result = [];
    result.push(Math.floor(money / coffee), money % coffee);
    return result
}