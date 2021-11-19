/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
    const sorted = [...nums].sort((a, b) => b - a)

    const sortedMap = new Map(
        sorted.map((num, index) => [num, nums.length - index - 1])
    )

    return nums.map((num) => sortedMap.get(num))
}
