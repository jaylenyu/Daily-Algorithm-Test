const solution = (str) => {
    let location = str.findIndex((el) => el === 'Kim')
    return `김서방은 ${location}에 있다`
}