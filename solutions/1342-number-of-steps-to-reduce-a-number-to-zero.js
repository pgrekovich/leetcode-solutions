/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    return (num >> 0).toString(2).split('').reduce((rez, cur) => {
        if (cur === '1') {
            return rez + 2
        }
        return rez + 1
    }, -1)
};

