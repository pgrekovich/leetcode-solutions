/**
 * @param {number[]} arr
 */
 var RangeFreqQuery = function(arr) {
    this.arr = arr
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
    let count = 0;

    if(left === right) {
        return this.arr[left] === value ? 1 : 0
    }

    for (let i = left; i < right + 1; ++i)
        if (this.arr[i] == value)
            ++count;

    return count;
};

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

//   var obj = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56])
//   var param_1 = obj.query(1, 2, 4)
//   var param_2 = obj.query(0, 11, 33)

  var obj = new RangeFreqQuery([8,8,6,7,5,7,7,8,3,6,3,4,6,6,5,5,4,4,7,7])
  var param_1 = obj.query(1, 5, 8)


console.log({param_1 })