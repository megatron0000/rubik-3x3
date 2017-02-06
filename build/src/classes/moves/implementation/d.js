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
var D = (function (_super) {
    __extends(D, _super);
    function D(cubeService) {
        return _super.call(this, cubeService) || this;
    }
    D.prototype.exec = function (cube) {
        var representation = cube.getFacesRepresentation();
        var clone = representation.clone();
        /**
         * Update front
         */
        representation.front[6] = clone.left[6];
        representation.front[7] = clone.left[7];
        representation.front[8] = clone.left[8];
        /**
         * Update left
         */
        representation.left[6] = clone.back[6];
        representation.left[7] = clone.back[7];
        representation.left[8] = clone.back[8];
        /**
         * Update back
         */
        representation.back[6] = clone.right[6];
        representation.back[7] = clone.right[7];
        representation.back[8] = clone.right[8];
        /**
         * Update right
         */
        representation.right[6] = clone.front[6];
        representation.right[7] = clone.front[7];
        representation.right[8] = clone.front[8];
        /**
         * Update down
         */
        representation.down[0] = clone.down[6];
        representation.down[1] = clone.down[3];
        representation.down[2] = clone.down[0];
        representation.down[3] = clone.down[7];
        // representation.down[4] = representation.down[4];
        representation.down[5] = clone.down[1];
        representation.down[6] = clone.down[8];
        representation.down[7] = clone.down[5];
        representation.down[8] = clone.down[2];
        return this.cubeService.fromFacesRepresentation(representation);
    };
    D.prototype.getName = function () {
        return 'D';
    };
    return D;
}(move_executor_1.MoveExecutor));
D = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object])
], D);
exports.D = D;
