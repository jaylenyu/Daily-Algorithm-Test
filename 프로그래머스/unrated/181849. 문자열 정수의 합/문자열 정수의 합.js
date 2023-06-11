const solution = (str) => str.split('').map((el) => Number(el)).reduce((acc, cur) => acc + cur, 0)

