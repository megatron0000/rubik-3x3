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
var B = (function (_super) {
    __extends(B, _super);
    function B(cubeService) {
        return _super.call(this, cubeService) || this;
    }
    B.prototype.exec = function (cube) {
        var representation = cube.getFacesRepresentation();
        var clone = representation.clone();
        /**
         * Update up
         */
        representation.up[0] = clone.right[2];
        representation.up[1] = clone.right[5];
        representation.up[2] = clone.right[8];
        /**
         * Update right
         */
        representation.right[2] = clone.down[8];
        representation.right[5] = clone.down[7];
        representation.right[8] = clone.down[6];
        /**
         * Update down
         */
        representation.down[8] = clone.left[6];
        representation.down[7] = clone.left[3];
        representation.down[6] = clone.left[0];
        /**
         * Update left
         */
        representation.left[0] = clone.up[2];
        representation.left[3] = clone.up[1];
        representation.left[6] = clone.up[0];
        /**
         * Update back
         */
        representation.back[0] = clone.back[6];
        representation.back[1] = clone.back[3];
        representation.back[2] = clone.back[0];
        representation.back[3] = clone.back[7];
        // representation.back[4] = representation.back[4];
        representation.back[5] = clone.back[1];
        representation.back[6] = clone.back[8];
        representation.back[7] = clone.back[5];
        representation.back[8] = clone.back[2];
        return this.cubeService.fromFacesRepresentation(representation);
    };
    B.prototype.getName = function () {
        return 'B';
    };
    return B;
}(move_executor_1.MoveExecutor));
B = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object])
], B);
exports.B = B;
