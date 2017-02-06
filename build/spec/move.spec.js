"use strict";
var move_service_1 = require("../src/classes/moves/move-service");
var color_1 = require("../src/enums/color");
var inversify_config_1 = require("../src/inversify.config");
/// <reference types="jasmine" />
var moveService = inversify_config_1.container.get(move_service_1.MoveService);
var cubeService = inversify_config_1.container.get('ICubeService');
var cube = cubeService.createSolved({
    up: color_1.Color.BLUE,
    down: color_1.Color.GREEN,
    left: color_1.Color.ORANGE,
    right: color_1.Color.RED,
    front: color_1.Color.WHITE,
    back: color_1.Color.YELLOW
});
describe('Moves executed on a cube', function () {
    var modifiedCopy = moveService.B.exec(cube);
    it('Should create a copy of the cube (no same memory reference)', function () {
        // Another memory reference
        expect(modifiedCopy).not.toBe(cube);
    });
    it('Should modify its state', function () {
        expect(modifiedCopy.getStringRepresentation())
            .not.toBe(cube.getStringRepresentation());
    });
    it('Should be localizable by name', function () {
        expect(moveService.getNamed('R')).toBe(moveService.R);
    });
});
describe('All moves', function () {
    it('Should have order 4', function () {
        moveService.getMoves().forEach(function (move) {
            var modifiedCube = move.exec(move.exec(move.exec(move.exec(cube))));
            expect(modifiedCube.equals(cube)).toBe(true);
        });
    });
});
