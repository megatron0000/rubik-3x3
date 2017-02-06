"use strict";
var FacesRepresentation = (function () {
    function FacesRepresentation(parameters) {
        this.up = new Array(9);
        this.down = new Array(9);
        this.left = new Array(9);
        this.right = new Array(9);
        this.front = new Array(9);
        this.back = new Array(9);
        if (parameters) {
            this.up = parameters.up;
            this.down = parameters.down;
            this.left = parameters.left;
            this.right = parameters.right;
            this.front = parameters.front;
            this.back = parameters.back;
        }
    }
    FacesRepresentation.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return FacesRepresentation;
}());
exports.FacesRepresentation = FacesRepresentation;
