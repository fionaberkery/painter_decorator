const assert = require('assert')
const Room = require('../room.js')
const PaintCan = require('../paintcan.js')
const Decorator = require('../decorator.js')

describe('Room', function () {
    let room
    beforeEach(function () {
        room = new Room(9, false)
    })

    it('should not be painted yet', function () {
        const actual = room.painted
        assert.strictEqual(actual, false)
    })

    it('should have a area in square meters', function () {
        const actual = room.area
        assert.strictEqual(actual, 9)
    })

    it('should be able to be painted', function () {
        const actual = room.canRoomBePainted()
        assert.strictEqual(actual, "Yes, this room can be painted")
    })


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



    describe('Decorator', function () {
        let decorator
        beforeEach(function () {
            decorator = new Decorator([])
            paintcan1 = new PaintCan(4, "Full")
            paintcan2 = new PaintCan(6, "Full")
            paintcan3 = new PaintCan(10, "Full")
    })

    it('should have an empty stock list', function () {
        const actual = decorator.stock
        assert.deepEqual(actual, [])
    })

    it('should be able to add to stock', function () {
        decorator.addToStock(paintcan1)
        decorator.addToStock(paintcan2)
        decorator.addToStock(paintcan3)
        const actual = decorator.getStockCount()
        assert.strictEqual(actual, 3)
    })

    it('should be able to calculate total litres in stock', function () {
        decorator.addToStock(paintcan1)
        decorator.addToStock(paintcan2)
        decorator.addToStock(paintcan3)
        const actual = decorator.totalLitres()
        assert.deepEqual(actual, 20)
    })





    })
    })
})