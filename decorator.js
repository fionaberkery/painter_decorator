const Decorator = function (stock) {
    this.stock = []
}

Decorator.prototype.addToStock = function (paintcan) {
    this.stock.push(paintcan)
}

Decorator.prototype.getStockCount = function () {
    return this.stock.length
}

Decorator.prototype.totalLitres = function () {
    let total = 0
    for (paintcan of this.stock)
    {
        total += paintcan.litres
    }
    return total
}

module.exports = Decorator


