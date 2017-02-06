"use strict";
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
var cube_faces_1 = require("./classes/cube-faces");
var inversify_1 = require("inversify");
var Cube = (function () {
    function Cube(cubeFaces) {
        this.history = '';
        this.faces = cubeFaces;
    }
    Cube.prototype.onInit = function (state) {
        this.faces.onInit(state);
    };
    Cube.prototype.doR = function () {
        this.faces.doR();
        this.history = (this.history ? '-' : '') + 'R';
        return this;
    };
    Cube.prototype.doL = function () {
        this.faces.doL();
        this.history = (this.history ? '-' : '') + 'L';
        return this;
    };
    Cube.prototype.doF = function () {
        this.faces.doF();
        this.history = (this.history ? '-' : '') + 'F';
        return this;
    };
    Cube.prototype.doB = function () {
        this.faces.doB();
        this.history = (this.history ? '-' : '') + 'B';
        return this;
    };
    Cube.prototype.doD = function () {
        this.faces.doD();
        this.history = (this.history ? '-' : '') + 'D';
        return this;
    };
    Cube.prototype.doRi = function () {
        this.faces.doRi();
        this.history = (this.history ? '-' : '') + 'Ri';
        return this;
    };
    Cube.prototype.doLi = function () {
        this.faces.doLi();
        this.history = (this.history ? '-' : '') + 'Li';
        return this;
    };
    Cube.prototype.doFi = function () {
        this.faces.doFi();
        this.history = (this.history ? '-' : '') + 'Fi';
        return this;
    };
    Cube.prototype.doBi = function () {
        this.faces.doBi();
        this.history = (this.history ? '-' : '') + 'Bi';
        return this;
    };
    Cube.prototype.doUi = function () {
        this.faces.doUi();
        this.history = (this.history ? '-' : '') + 'Ui';
        return this;
    };
    Cube.prototype.doDi = function () {
        this.faces.doDi();
        this.history = (this.history ? '-' : '') + 'Di';
        return this;
    };
    Cube.prototype.doR2 = function () {
        this.faces.doR2();
        this.history = (this.history ? '-' : '') + 'R2';
        return this;
    };
    Cube.prototype.doL2 = function () {
        this.faces.doL2();
        this.history = (this.history ? '-' : '') + 'L2';
        return this;
    };
    Cube.prototype.doF2 = function () {
        this.faces.doF2();
        this.history = (this.history ? '-' : '') + 'F2';
        return this;
    };
    Cube.prototype.doB2 = function () {
        this.faces.doB2();
        this.history = (this.history ? '-' : '') + 'B2';
        return this;
    };
    Cube.prototype.doU2 = function () {
        this.faces.doU2();
        this.history = (this.history ? '-' : '') + 'U2';
        return this;
    };
    Cube.prototype.doD2 = function () {
        this.faces.doD2();
        this.history = (this.history ? '-' : '') + 'D2';
        return this;
    };
    return Cube;
}());
Cube = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(cube_faces_1.CubeFaces)),
    __metadata("design:paramtypes", [cube_faces_1.CubeFaces])
], Cube);
exports.Cube = Cube;
