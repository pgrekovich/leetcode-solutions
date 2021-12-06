/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size
    this.arr = []

    this.sum = 0
    this.p = 0
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.arr.length < this.size) {
        this.arr.push(val)
        this.sum += val
        return this.sum / this.arr.length
    }

    this.sum = this.sum - this.arr[this.p] + val
    this.arr[this.p] = val
    this.p = this.p < this.size - 1 ? this.p + 1 : 0

    return this.sum / this.size
}