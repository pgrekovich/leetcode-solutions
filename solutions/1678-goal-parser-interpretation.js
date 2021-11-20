/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o')
}

test('1678-case-1', () => {
    expect(interpret('G()(al)')).toStrictEqual('Goal')
})

test('1678-case-2', () => {
    expect(interpret('G()()()()(al)')).toStrictEqual('Gooooal')
})

test('1678-case-3', () => {
    expect(interpret('(al)G(al)()()G')).toStrictEqual('alGalooG')
})
