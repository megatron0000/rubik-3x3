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
var L = (function (_super) {
    __extends(L, _super);
    function L(cubeService) {
        return _super.call(this, cubeService) || this;
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
        return this.cubeService.fromFacesRepresentation(representation);
    };
    L.prototype.getName = function () {
        return 'L';
    };
    return L;
}(move_executor_1.MoveExecutor));
L = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object])
], L);
exports.L = L;
