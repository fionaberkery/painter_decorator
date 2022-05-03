const assert = require('assert')
const Room = require('../room.js')
const PaintCan = require('../paintcan.js')
const Decorator = require('../decorator.js')


describe('PaintCan', function () {
    let paintcan
    beforeEach(function () {
        paintcan1 = new PaintCan(4, "Full")
        paintcan2 = new PaintCan(6, "Full")
        paintcan3 = new PaintCan(10, "Full")
    })

it('should have a number of litres', function () {
    const actual = paintcan1.litres
    assert.strictEqual(actual, 4)
})

it('should not be empty', function () {
    const actual = paintcan1.empty
    assert.strictEqual(actual, "Full")
})

it('should be able to empty itself', function () {
    paintcan1.emptyMe()
    const actual = paintcan1.litres
    assert.strictEqual(actual, 0)
})

})