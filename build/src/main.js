#!/usr/bin/env node
"use strict";
var inversify_config_1 = require("./inversify.config");
var bfs_1 = require("./classes/algorithms/implementation/bfs");
var move_service_1 = require("./classes/moves/move-service");
var commandLineCommands = require("command-line-commands");
var collect_duplicates_1 = require("./routines/collect-duplicates");
var search_duplicates_1 = require("./routines/search-duplicates");
var pathService = inversify_config_1.container.get('IPathService');
var cubeService = inversify_config_1.container.get('ICubeService');
var moveService = inversify_config_1.container.get(move_service_1.MoveService);
var bfs = inversify_config_1.container.get(bfs_1.BFS);
/**
 * At runtime, we will be at @root/build/src/main.ts
 */
pathService.init(__dirname + '/../../');
var validCommands = [null, 'collect-duplicates', 'search-duplicates'];
var _a = commandLineCommands(validCommands), command = _a.command, argv = _a.argv;
switch (command) {
    case 'collect-duplicates':
        collect_duplicates_1.collectDuplicates(pathService);
        break;
    case 'search-duplicates':
        search_duplicates_1.searchDuplicates(moveService, bfs, cubeService, pathService);
        break;
    default:
        console.log('Specify a command');
        break;
}
