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
var U = (function (_super) {
    __extends(U, _super);
    function U(cubeService) {
        return _super.call(this, cubeService) || this;
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
        return this.cubeService.fromFacesRepresentation(representation);
    };
    U.prototype.getName = function () {
        return 'U';
    };
    return U;
}(move_executor_1.MoveExecutor));
U = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object])
], U);
exports.U = U;
