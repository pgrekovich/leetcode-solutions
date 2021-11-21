/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
 var wateringPlants = function(plants, capacity) {
    let steps = 0
    let cap = capacity

    for(let i = 0; i < plants.length; i++) {

        if(cap < plants[i]) {
            steps += 2*i
            cap = capacity
        }

        steps++
        cap -= plants[i]
    }


    return steps
};

test('5201-case-1', () => {
    const ansr = wateringPlants([2,2,3,3], 5)
    expect(ansr).toStrictEqual(14)
})

test('5201-case-2', () => {
    const ansr = wateringPlants([1,1,1,4,2,3], 4)
    expect(ansr).toStrictEqual(30)
})

test('5201-case-3', () => {
    const ansr = wateringPlants([7,7,7,7,7,7,7], 8)
    expect(ansr).toStrictEqual(49)
})
