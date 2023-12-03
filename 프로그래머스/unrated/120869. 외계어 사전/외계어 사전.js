function solution(spell, dic) {
    const result = dic.filter(v => spell.every(el => v.includes(el)))
    return result.length ? 1 : 2
}

