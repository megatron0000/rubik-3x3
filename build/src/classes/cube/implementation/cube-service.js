"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var faces_representation_1 = require("../../faces-representation");
var cube_1 = require("./cube");
var inversify_1 = require("inversify");
var CubeService = (function () {
    function CubeService() {
    }
    CubeService.prototype.fromStringRepresentation = function (source) {
        return cube_1.Cube.fromStringRepresentation(source);
    };
    CubeService.prototype.fromFacesRepresentation = function (source) {
        return cube_1.Cube.fromFacesRepresentation(source);
    };
    CubeService.prototype.createSolved = function (centers) {
        var faces = new faces_representation_1.FacesRepresentation();
        for (var i = 0; i < 9; i++) {
            faces.up[i] = centers.up;
            faces.down[i] = centers.down;
            faces.left[i] = centers.left;
            faces.right[i] = centers.right;
            faces.front[i] = centers.front;
            faces.back[i] = centers.back;
        }
        return this.fromFacesRepresentation(faces);
    };
    return CubeService;
}());
CubeService = __decorate([
    inversify_1.injectable()
], CubeService);
exports.CubeService = CubeService;
