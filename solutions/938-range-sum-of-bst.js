/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var rangeSumBST = function (root, low, high) {
    let sum = 0
    function traverse(node) {
        if (!node) return null
        if (node.val >= low && node.val <= high) {
            sum += node.val
        }
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return sum
}

test('938-case-1', () => {
    const ansr = rangeSumBST([10,5,15,3,7,null,18], 7, 15)
    expect(ansr).toStrictEqual(32)
})

test('938-case-2', () => {
    const ansr = rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10)
    expect(ansr).toStrictEqual(23)
})
