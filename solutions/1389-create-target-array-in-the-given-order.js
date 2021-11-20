/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

createTargetArray = function (nums, index) {
    const arr = []
    for (let i = 0; i < index.length; i++) {
        arr.splice(index[i], 0, nums[i])
    }
    return arr
}

//-------TEST--------

test('1839-case-1', () => {
    expect(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])).toStrictEqual([
        0, 4, 1, 3, 2,
    ])
})

test('1839-case-2', () => {
    expect(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0])).toStrictEqual([
        0, 1, 2, 3, 4,
    ])
})

test('1839-case-3', () => {
    expect(createTargetArray([4, 2, 4, 3, 2], [0, 0, 1, 3, 1])).toStrictEqual([
        2, 2, 4, 4, 3,
    ])
})