"use strict";
var move_service_1 = require("../src/classes/moves/move-service");
var inversify_config_1 = require("../src/inversify.config");
var history = inversify_config_1.container.get('IHistory');
var move = inversify_config_1.container.get(move_service_1.MoveService);
var historyService = inversify_config_1.container.get('IHistoryService');
describe('History class', function () {
    it('Should start empty', function () {
        expect(history.toString()).toBe('');
    });
    it('Should self-convert to string with a gettable delimiter', function () {
        history.append(move.B);
        history.append(move.D);
        expect(history.toString()).toBe('B' + history.getDelimiter() + 'D');
    });
});
describe('History service', function () {
    it('Should create a IHistory instance', function () {
        expect(historyService.create()).toBeDefined();
    });
});
