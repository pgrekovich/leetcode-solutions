/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = (n) => `${n}`.split('').reduce((sum, i, _, arr) => sum + Math.pow(i, arr.length) === n, 0) === n
