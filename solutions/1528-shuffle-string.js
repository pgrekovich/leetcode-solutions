/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
     for(let i = 0; i < indices.length; i++) {
         indices[indices[i] & 0b11111111] |= (s.charCodeAt(i) & 0b11111111) << 8
     }

     for(let i = 0; i < indices.length; i++) {
        indices[i] = String.fromCharCode(indices[i] >> 8)
     }

     return indices.join('')
};
