const PaintCan = function (litres, empty) {
    this.litres = litres
    this.empty = empty
}

PaintCan.prototype.emptyMe = function () {
    this.litres = 0
}



module.exports = PaintCan