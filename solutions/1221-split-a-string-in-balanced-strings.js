/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
   let balance = 0;
   let rez = 0;

   for(let i = 0; i < s.length; i++) {
       if(s[i] === 'L') {
           balance++
       } else {
           balance--
       }
       if(balance === 0) {
           rez++
       }
   }
   
   return rez === 0 ? 1 : rez;
};


test('1821-case-1', () => {
    expect(balancedStringSplit('RLRRLLRLRL')).toStrictEqual(4)
})

test('1821-case-2', () => {
    expect(balancedStringSplit('RLLLLRRRLR')).toStrictEqual(3)
})

test('1821-case-3', () => {
    expect(balancedStringSplit('LLLLRRRR')).toStrictEqual(1)
})
