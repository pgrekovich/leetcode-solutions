/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
    const m = {}

    for (let i = 0; i < items.length; i++) {
        const id = items[i][0]
        const grade = items[i][1]

        if (m[id]) {
            m[id].push(grade)
        } else {
            m[id] = [grade]
        }
    }

    const res = []

    Object.keys(m).sort((a, b) => +a - +b).forEach((id) => {
        m[id] = m[id]
            .sort((a, b) => +b - +a)
            .reduce((sum, item, i) => {
                return i < 5 ? sum + item : sum
            }, 0)


        res.push([+id,~~(m[id] / 5)])
    })

    return res
}
