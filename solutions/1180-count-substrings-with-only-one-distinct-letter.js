/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function (s) {
    const sp = s.split('')

    const count = [1]

    let result = 1

    for (let i = 1; i < sp.length; i++) {
        if (sp[i] === sp[i - 1]) {
            count[i] = count[i - 1] + 1
        } else {
            count[i] = 1
        }

        result += count[i]
    }

    return result
}
