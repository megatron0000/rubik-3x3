"use strict";
var FaceCenterRepresentation = (function () {
    function FaceCenterRepresentation(centers) {
        this.up = centers.up;
        this.down = centers.down;
        this.left = centers.left;
        this.right = centers.right;
        this.front = centers.front;
        this.back = centers.back;
    }
    return FaceCenterRepresentation;
}());
exports.FaceCenterRepresentation = FaceCenterRepresentation;
