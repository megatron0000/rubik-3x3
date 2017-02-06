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
var inversify_1 = require("inversify");
var Cube = Cube_1 = (function () {
    function Cube() {
    }
    Cube.getFaceFromString = function (modulusClass, source) {
        var face = new Array(9);
        for (var i = 0; i < 9; i++) {
            face.push(parseInt(source[6 * i + modulusClass], 10));
        }
        return face;
    };
    Cube.fromStringRepresentation = function (source) {
        try {
            var cube = new Cube_1();
            cube.faces.up = Cube_1.getFaceFromString(0, source);
            cube.faces.down = Cube_1.getFaceFromString(1, source);
            cube.faces.left = Cube_1.getFaceFromString(2, source);
            cube.faces.right = Cube_1.getFaceFromString(3, source);
            cube.faces.front = Cube_1.getFaceFromString(4, source);
            cube.faces.back = Cube_1.getFaceFromString(5, source);
            return cube;
        }
        catch (e) {
            throw e;
        }
    };
    Cube.fromFacesRepresentation = function (source) {
        var cube = new Cube_1();
        cube.faces = JSON.parse(JSON.stringify(source));
        return cube;
    };
    Cube.prototype.getFacesRepresentation = function () {
        return JSON.parse(JSON.stringify(this.faces));
    };
    Cube.prototype.getStringRepresentation = function () {
        var result = '';
        for (var i = 0; i < 9; i++) {
            result += this.faces.up[i].toString() + this.faces.down[i].toString()
                + this.faces.left[i].toString() + this.faces.right[i].toString()
                + this.faces.front[i].toString() + this.faces.back[i].toString();
        }
        return result;
    };
    return Cube;
}());
Cube = Cube_1 = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Cube);
exports.Cube = Cube;
var Cube_1;
