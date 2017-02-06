"use strict";
var move_service_1 = require("../src/classes/moves/move-service");
var inversify_config_1 = require("../src/inversify.config");
/// <reference types="jasmine" />
var handler = inversify_config_1.container.get('AbstractHandler');
var moveService = inversify_config_1.container.get(move_service_1.MoveService);
describe('Cube handler (like... a person)', function () {
    it('Should be able to move his cube and keep track of history', function () {
        handler.move(moveService.B);
        handler.move(moveService.L);
        expect(handler.getHistory().toString()).toBe('B-L');
    });
});
