"use strict";
var color_1 = require("../src/enums/color");
var inversify_config_1 = require("../src/inversify.config");
/// <reference types="jasmine" />
var iCubeService = inversify_config_1.container.get('ICubeService');
describe('ICube implementation', function () {
    var icube = inversify_config_1.container.get('ICube');
    it('Should have empty string representation', function () {
        expect(icube.getStringRepresentation()).toBe('');
    });
    it('Should have a FacesRepresentation with 9-length trash array faces', function () {
        expect(icube.getFacesRepresentation()).toBeTruthy();
        expect(icube.getFacesRepresentation().up.length).toBe(9);
        expect(icube.getFacesRepresentation().down.length).toBe(9);
        expect(icube.getFacesRepresentation().left.length).toBe(9);
        expect(icube.getFacesRepresentation().right.length).toBe(9);
        expect(icube.getFacesRepresentation().front.length).toBe(9);
        expect(icube.getFacesRepresentation().back.length).toBe(9);
    });
    it('Should self-convert to string representation correctly', function () {
        var solvedCube = iCubeService.createSolved({
            up: color_1.Color.BLUE,
            down: color_1.Color.GREEN,
            left: color_1.Color.ORANGE,
            right: color_1.Color.RED,
            front: color_1.Color.WHITE,
            back: color_1.Color.YELLOW
        });
        var stringRepresentation = solvedCube.getStringRepresentation();
        var part = [
            color_1.Color.BLUE,
            color_1.Color.GREEN,
            color_1.Color.ORANGE,
            color_1.Color.RED,
            color_1.Color.WHITE,
            color_1.Color.YELLOW
        ].join('');
        var shouldBe = part
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part);
        expect(stringRepresentation).toEqual(shouldBe);
    });
    it('Should self-convert to FacesRepresentation', function () {
        var solvedCube = iCubeService.createSolved({
            up: color_1.Color.BLUE,
            down: color_1.Color.GREEN,
            left: color_1.Color.ORANGE,
            right: color_1.Color.RED,
            front: color_1.Color.WHITE,
            back: color_1.Color.YELLOW
        });
        expect(iCubeService.fromFacesRepresentation(solvedCube.getFacesRepresentation())
            .getStringRepresentation().length).toBe(54);
    });
});
describe('ICubeService', function () {
    var solvedCube = iCubeService.createSolved({
        up: color_1.Color.BLUE,
        down: color_1.Color.GREEN,
        left: color_1.Color.ORANGE,
        right: color_1.Color.RED,
        front: color_1.Color.WHITE,
        back: color_1.Color.YELLOW
    });
    it('Should create solved cube correctly filled with Colors', function () {
        var faces = solvedCube.getFacesRepresentation();
        expect(faces.up.every(function (el) { return el === color_1.Color.BLUE; }));
        expect(faces.down.every(function (el) { return el === color_1.Color.GREEN; }));
        expect(faces.left.every(function (el) { return el === color_1.Color.ORANGE; }));
        expect(faces.right.every(function (el) { return el === color_1.Color.RED; }));
        expect(faces.front.every(function (el) { return el === color_1.Color.WHITE; }));
        expect(faces.back.every(function (el) { return el === color_1.Color.YELLOW; }));
    });
    it('Should create from string', function () {
        var cube = iCubeService.fromStringRepresentation('012345012345012345012345012345012345012345012345012345');
        expect(cube).toBeDefined();
        expect(cube.getStringRepresentation()).toBe('012345012345012345012345012345012345012345012345012345');
    });
});
