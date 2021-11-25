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
 * @return {number}
 */
 var maxDepth = function(root) {
    const stack = []
    let depth = 0

    if(root) {
        stack.push([root, 1])
    }

    while(stack.length !== 0) {
        let [cur, curDepth] = stack.pop()

        if(cur.left) {
            stack.push([cur.left, curDepth + 1])
        }

        if(cur.right) {
            stack.push([cur.right, curDepth + 1])
        }

        depth = Math.max(depth, curDepth)
    }

    return depth
};
