"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cube_1 = require("../cube");
var move_executor_1 = require("./move-executor");
var R = (function (_super) {
    __extends(R, _super);
    function R() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    R.prototype.exec = function (cube) {
        var representation = cube.getFacesRepresentation();
        var clone = representation.clone();
        /**
         * Update up
         */
        representation.up[2] = clone.front[2];
        representation.up[5] = clone.front[5];
        representation.up[8] = clone.front[8];
        /**
         * Update front
         */
        representation.front[2] = clone.down[2];
        representation.front[5] = clone.down[5];
        representation.front[8] = clone.down[8];
        /**
         * Update down
         */
        representation.down[2] = clone.back[6];
        representation.down[5] = clone.back[3];
        representation.down[8] = clone.back[0];
        /**
         * Update back
         */
        representation.back[0] = clone.up[8];
        representation.back[3] = clone.up[5];
        representation.back[6] = clone.up[2];
        /**
         * Update right
         */
        representation.right[0] = clone.right[6];
        representation.right[1] = clone.right[3];
        representation.right[2] = clone.right[0];
        representation.right[3] = clone.right[7];
        // representation.right[4] = clone.right[4];
        representation.right[5] = clone.right[1];
        representation.right[6] = clone.right[8];
        representation.right[7] = clone.right[5];
        representation.right[8] = clone.right[2];
        return cube_1.Cube.fromFacesRepresentation(representation);
    };
    R.prototype.getName = function () {
        return 'R';
    };
    return R;
}(move_executor_1.MoveExecutor));
exports.R = R;
