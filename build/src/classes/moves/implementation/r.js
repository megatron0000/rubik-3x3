"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var move_executor_1 = require("../move-executor");
var inversify_1 = require("inversify");
var R = (function (_super) {
    __extends(R, _super);
    function R(cubeService) {
        return _super.call(this, cubeService) || this;
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
        return this.cubeService.fromFacesRepresentation(representation);
    };
    R.prototype.getName = function () {
        return 'R';
    };
    return R;
}(move_executor_1.MoveExecutor));
R = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object])
], R);
exports.R = R;
