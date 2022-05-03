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

})