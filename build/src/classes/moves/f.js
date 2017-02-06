"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cube_1 = require("../cube");
var move_executor_1 = require("./move-executor");
var F = (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.exec = function (cube) {
        var representation = cube.getFacesRepresentation();
        var clone = representation.clone();
        /**
         * Update up
         */
        representation.up[6] = clone.left[8];
        representation.up[7] = clone.left[5];
        representation.up[8] = clone.left[2];
        /**
         * Update left
         */
        representation.left[2] = clone.down[0];
        representation.left[5] = clone.down[1];
        representation.left[8] = clone.down[2];
        /**
         * Update down
         */
        representation.down[0] = clone.right[6];
        representation.down[1] = clone.right[3];
        representation.down[2] = clone.right[0];
        /**
         * Update right
         */
        representation.right[0] = clone.up[6];
        representation.right[3] = clone.up[7];
        representation.right[6] = clone.up[8];
        /**
         * Update front
         */
        representation.front[0] = clone.front[6];
        representation.front[1] = clone.front[3];
        representation.front[2] = clone.front[0];
        representation.front[3] = clone.front[7];
        // representation.front[4] = representation.front[4];
        representation.front[5] = clone.front[1];
        representation.front[6] = clone.front[8];
        representation.front[7] = clone.front[5];
        representation.front[8] = clone.front[2];
        return cube_1.Cube.fromFacesRepresentation(representation);
    };
    F.prototype.getName = function () {
        return 'F';
    };
    return F;
}(move_executor_1.MoveExecutor));
exports.F = F;
