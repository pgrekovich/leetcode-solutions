/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    const cache = new Map()

    for(let i = 0; i < nums.length; i++) {
        if(cache.has(nums[i])) {
            cache.set(nums[i], cache.get(nums[i]) + 1)
        } else {
            cache.set(nums[i], 1)
        }
    }

    let ans = 0


    for(let i = 0; i < nums.length; i++) {
        if(cache.has(nums[i] - k)) {
            ans += cache.get(nums[i] - k)
        }
    }

    return ans
}
