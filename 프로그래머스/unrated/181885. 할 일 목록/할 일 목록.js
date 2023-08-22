const solution = (list, finished) => {
    return list.filter((el, idx) => !finished[idx])
}