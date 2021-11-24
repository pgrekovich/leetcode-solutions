/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function (s) {
    const m = new Map()
    const arr = s.split(' ')

    arr.forEach(item => {
        m.set(+item[item.length - 1], item.slice(0, -1))
    })

    let rez = []

    for(let i = 1; i <= arr.length; i++) {
        rez.push(m.get(i))
    }

    return rez.join(' ')
}