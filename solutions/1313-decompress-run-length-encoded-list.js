/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    const arr = []

    for (let i = 0; i < nums.length; i += 2) {
        arr.push(
            ...(new Array(nums[i])).fill(nums[i+1], 0)
        )
    }

    return arr
}
