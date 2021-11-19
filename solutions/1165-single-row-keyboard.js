/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

var calculateTime = function(keyboard, word) {
    let steps = 0
    let lastIndex = 0

    for(i = 0; i < word.length; i++) {
        const idx = keyboard.indexOf(word[i])
        steps += Math.abs(lastIndex - idx)
        lastIndex = idx
    } 

    return steps
};