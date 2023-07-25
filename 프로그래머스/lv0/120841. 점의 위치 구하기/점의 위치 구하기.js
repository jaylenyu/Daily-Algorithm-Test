const solution = (dot) => {
    if (dot[0] > 0 && dot[1] > 0) return 1
    if (0 > dot[0] && dot[1] > 0) return 2
    if (0 > dot[0] && 0 > dot[1]) return 3
    if (dot[0] > 0 && 0 > dot[1]) return 4
    return 0
}