/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
    const hashT = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashT[nums[i]]) {
            hashT[nums[i]]++
        } else {
            hashT[nums[i]] = 1
        }
    }

    const keys = Object.keys(hashT)

    let result = -1

    for (let i = 0; i < keys.length; i++) {
        if (hashT[keys[i]] === 1) {
            result = Math.max(result, keys[i])
        }
    }

    return result
}

// console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]))
console.log(largestUniqueNumber([9, 9, 8, 8]))
