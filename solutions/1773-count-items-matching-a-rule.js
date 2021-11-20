/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    const typeIdx = ['type', 'color', 'name'].indexOf(ruleKey)

    let rez = 0

    for(let i = 0; i < items.length; i++) {
        if(items[i][typeIdx] === ruleValue) {
            rez++
        }
    }

    return rez
}

test('1773-case-', () => {
    const ansr = countMatches(
        [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'lenovo'],
            ['phone', 'gold', 'iphone'],
        ],
        'color',
        'silver'
    )
    expect(ansr).toStrictEqual(1)
})

test('1773-case-', () => {
    const ansr = countMatches(
        [
            ['phone', 'blue', 'pixel'],
            ['computer', 'silver', 'phone'],
            ['phone', 'gold', 'iphone'],
        ],
        'type',
        'phone'
    )
    expect(ansr).toStrictEqual(2)
})
