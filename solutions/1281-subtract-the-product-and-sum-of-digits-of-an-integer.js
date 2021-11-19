/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mul = 1, sum = 0, tmp = null;

    while (n) {
        tmp = n % 10;
        mul *= tmp;
        sum += tmp;
        n = ~~(n / 10);
    }

    return mul - sum;
};
