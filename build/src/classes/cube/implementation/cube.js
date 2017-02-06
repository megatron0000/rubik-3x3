"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var face_center_representation_1 = require("../../face-center-representation");
var faces_representation_1 = require("../../faces-representation");
var inversify_1 = require("inversify");
var Cube = Cube_1 = (function () {
    function Cube() {
        this.faces = new faces_representation_1.FacesRepresentation();
    }
    Cube.getFaceFromString = function (modulusClass, source) {
        var face = [];
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
        cube.faces = new faces_representation_1.FacesRepresentation(JSON.parse(JSON.stringify(source)));
        return cube;
    };
    Cube.prototype.getFacesRepresentation = function () {
        return new faces_representation_1.FacesRepresentation(JSON.parse(JSON.stringify(this.faces)));
    };
    Cube.prototype.getFaceCenterRepresentation = function () {
        return new face_center_representation_1.FaceCenterRepresentation({
            up: this.faces.up[4],
            down: this.faces.down[4],
            left: this.faces.left[4],
            right: this.faces.right[4],
            front: this.faces.front[4],
            back: this.faces.back[4]
        });
    };
    Cube.prototype.getStringRepresentation = function () {
        var result = '';
        try {
            for (var i = 0; i < 9; i++) {
                result += this.faces.up[i].toString() + this.faces.down[i].toString()
                    + this.faces.left[i].toString() + this.faces.right[i].toString()
                    + this.faces.front[i].toString() + this.faces.back[i].toString();
            }
        }
        catch (e) {
        }
        return result;
    };
    Cube.prototype.equals = function (other) {
        return this.getStringRepresentation() === other.getStringRepresentation();
    };
    return Cube;
}());
Cube = Cube_1 = __decorate([
    inversify_1.injectable()
], Cube);
exports.Cube = Cube;
var Cube_1;
