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
            paintcan = new PaintCan(4, "Full")
        })

    it('should have a number of litres', function () {
        const actual = paintcan.litres
        assert.strictEqual(actual, 4)
    })

    it('should not be empty', function () {
        const actual = paintcan.empty
        assert.strictEqual(actual, "Full")
    })

    describe('Decorator', function () {
        let decorator
        beforeEach(function () {
            decorator = new Decorator([])
        })

    it('should have an empty stock list', function () {
        const actual = decorator.stock
        assert.deepEqual(actual, [])
    })

    })
    })
})