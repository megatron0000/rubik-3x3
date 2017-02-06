"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cube_1 = require("../cube");
var move_executor_1 = require("./move-executor");
var U = (function (_super) {
    __extends(U, _super);
    function U() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    U.prototype.exec = function (cube) {
        var representation = cube.getFacesRepresentation();
        var clone = representation.clone();
        /**
         * Update front
         */
        representation.front[0] = clone.right[0];
        representation.front[1] = clone.right[1];
        representation.front[2] = clone.right[2];
        /**
         * Update right
         */
        representation.right[0] = clone.back[0];
        representation.right[1] = clone.back[1];
        representation.right[2] = clone.back[2];
        /**
         * Update back
         */
        representation.back[0] = clone.left[0];
        representation.back[1] = clone.left[1];
        representation.back[2] = clone.left[2];
        /**
         * Update left
         */
        representation.left[0] = clone.front[0];
        representation.left[1] = clone.front[1];
        representation.left[2] = clone.front[2];
        /**
         * Update up
         */
        representation.up[0] = clone.up[6];
        representation.up[1] = clone.up[3];
        representation.up[2] = clone.up[0];
        representation.up[3] = clone.up[7];
        // representation.up[4] = representation.up[4];
        representation.up[5] = clone.up[1];
        representation.up[6] = clone.up[8];
        representation.up[7] = clone.up[5];
        representation.up[8] = clone.up[2];
        return cube_1.Cube.fromFacesRepresentation(representation);
    };
    U.prototype.getName = function () {
        return 'U';
    };
    return U;
}(move_executor_1.MoveExecutor));
exports.U = U;
