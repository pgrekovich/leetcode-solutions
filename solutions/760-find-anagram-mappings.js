/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    const ln = nums1.length
    const m = new Map()

    for(let i = 0; i < ln; i++) {
        m.set(nums2[i],  i);
    }

    for(i = 0; i < ln; i++) {
        nums2[i] = m.get(nums1[i])
    }

    return nums2
};