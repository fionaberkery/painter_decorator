const assert = require('assert')
const Room = require('../room.js')
const PaintCan = require('../paintcan.js')
const Decorator = require('../decorator.js')


    

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
