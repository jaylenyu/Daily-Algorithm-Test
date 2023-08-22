const solution = (list) => {
    let even = 0;
    let odd = 0;
    list.map((num, idx) => (idx % 2) ? even += num : odd += num)
    return even > odd ? even : odd
}