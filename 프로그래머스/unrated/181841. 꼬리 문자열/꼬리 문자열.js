const solution = (str, ex) => {
     return str.filter(word => word.includes(ex) === false).join("")
}