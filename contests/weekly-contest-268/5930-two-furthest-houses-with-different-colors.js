/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {   
    let max = 0

    for(let i = 0; i < colors.length; i++) {
        for(j = i+1; j < colors.length; j++) {
            if(colors[i] !== colors[j]) {
                const diff = Math.abs(j - i)
                if(diff > max) {
                    max = diff
                }
            }
        }
    }

    return max
};

test('5930-case-1', () => {
    const ansr = maxDistance([1,1,1,6,1,1,1])
    expect(ansr).toStrictEqual(3)
})

test('5930-case-2', () => {
    const ansr = maxDistance([1,8,3,8,3])
    expect(ansr).toStrictEqual(4)
})

test('5930-case-3', () => {
    const ansr = maxDistance([0, 1])
    expect(ansr).toStrictEqual(1)
})

test('5930-case-4', () => {
    const ansr = maxDistance([9,9,9,18,9,9,9,9,9,18])
    expect(ansr).toStrictEqual(9)
})
