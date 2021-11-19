/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

 var calculateTimeV1 = function(keyboard, word) {
    let steps = 0
    let lastIndex = 0

    for(i = 0; i < word.length; i++) {
        const idx = keyboard.indexOf(word[i])
        steps += Math.abs(lastIndex - idx)
        lastIndex = idx
    } 

    return steps
};

var calculateTimeV2 = function(keyboard, word) {
    let steps = 0
    let lastIndex = 0

    const keyboardCache= new Map()

    for(i = 0; i < keyboard.length; i++) {
        keyboardCache.set(keyboard[i], i)
    }

    for(i = 0; i < word.length; i++) {
        const idx = keyboardCache.get(word[i])

        steps += Math.abs(lastIndex - idx)

        lastIndex = idx
    } 

    return steps
};
