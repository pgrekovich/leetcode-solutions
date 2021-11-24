/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let rez = 0

    for (let i = 0; i < n; i++) {
        rez ^= start + 2*i
    }

    return rez
}