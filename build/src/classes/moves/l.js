"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cube_1 = require("../cube");
var move_executor_1 = require("./move-executor");
var L = (function (_super) {
    __extends(L, _super);
    function L() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    L.prototype.exec = function (cube) {
        var representation = cube.getFacesRepresentation();
        var clone = representation.clone();
        /**
         * Update up
         */
        representation.up[0] = clone.back[8];
        representation.up[3] = clone.back[5];
        representation.up[6] = clone.back[2];
        /**
         * Update back
         */
        representation.back[2] = clone.down[6];
        representation.back[5] = clone.down[3];
        representation.back[8] = clone.down[0];
        /**
         * Update down
         */
        representation.down[0] = clone.front[0];
        representation.down[3] = clone.front[3];
        representation.down[6] = clone.front[6];
        /**
         * Update front
         */
        representation.front[0] = clone.up[0];
        representation.front[3] = clone.up[3];
        representation.front[6] = clone.up[6];
        /**
         * Update left
         */
        representation.left[0] = clone.left[6];
        representation.left[1] = clone.left[3];
        representation.left[2] = clone.left[0];
        representation.left[3] = clone.left[7];
        // representation.left[4] = clone.left[4];
        representation.left[5] = clone.left[1];
        representation.left[6] = clone.left[8];
        representation.left[7] = clone.left[5];
        representation.left[8] = clone.left[2];
        return cube_1.Cube.fromFacesRepresentation(representation);
    };
    L.prototype.getName = function () {
        return 'L';
    };
    return L;
}(move_executor_1.MoveExecutor));
exports.L = L;
