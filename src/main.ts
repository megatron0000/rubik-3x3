#!/usr/bin/env node
import { IPathService } from 'strong-paths';
import { container } from './inversify.config';
import { BFS } from './classes/algorithms/implementation/bfs';
import { ICubeService } from './classes/cube/i-cube-service';
import { MoveService } from './classes/moves/move-service';
import commandLineCommands = require('command-line-commands');
import { collectDuplicates } from './routines/collect-duplicates';
import { searchDuplicates } from './routines/search-duplicates';

let pathService: IPathService = container.get<IPathService>('IPathService');
let cubeService = container.get<ICubeService>('ICubeService');
let moveService = container.get<MoveService>(MoveService);
let bfs = container.get(BFS);

/**
 * At runtime, we will be at @root/build/src/main.ts
 */
pathService.init(__dirname + '/../../');

let validCommands: string[] = [null, 'collect-duplicates', 'search-duplicates'];

let { command, argv } = commandLineCommands(validCommands);

switch (command) {
    case 'collect-duplicates':
        collectDuplicates(pathService);
        break;

    case 'search-duplicates':
        searchDuplicates(moveService, bfs, cubeService, pathService);
        break;

    default:
        console.log('Specify a command');
        break;
}
