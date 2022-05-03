const assert = require('assert')

const Room = function (area, painted) {
    this.area = area
    this.painted = painted

}


Room.prototype.canRoomBePainted = function () {
    if (this.painted === false) {
        return "Yes, this room can be painted"
    }
    else {
        return "No" 
    }
}

module.exports = Room