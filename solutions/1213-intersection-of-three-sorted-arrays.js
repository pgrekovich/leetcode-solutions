/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    let i = 0
    let j = 0
    let k = 0

    const res = []

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            res.push(arr1[i])
        }

        const min = Math.min(arr1[i], arr2[j], arr3[k])

        if (arr1[i] === min) i++
        if (arr2[j] === min) j++
        if (arr3[k] === min) k++
    }

    return res
}

//one line for memes
const f = (a, b, c) => a.filter(e => b.includes(e) && c.includes(e))
