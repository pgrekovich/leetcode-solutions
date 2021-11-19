/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    encoded.unshift(first)
    for(let i = 1; i < encoded.length; i++) {
        encoded[i] = encoded[i] ^ encoded[i - 1]
    } 
   return encoded
};
