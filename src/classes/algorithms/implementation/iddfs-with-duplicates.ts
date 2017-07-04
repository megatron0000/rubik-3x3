import path = require('path');
import fs = require('fs-extra');
import readline = require('readline');
import { ICube } from '../../cube/i-cube';
import { ICubeService } from '../../cube/i-cube-service';
import { ICubeGraph } from '../../graph/i-cube-graph';
import { IHistory } from '../../history/i-history';
import { IHistoryService } from '../../history/i-history-service';
import { IDDFS } from './iddfs';
import { inject, injectable } from 'inversify';

@injectable()
export class IDDFSWithDuplicates extends IDDFS {

    protected duplicateDictionary: {
        [index: string]: boolean
    } = {};

    /**
     * @Overwrite
     */
    protected dls(node: ICube, depth: number, currentHistory: IHistory) {
        if (this.duplicateDictionary[currentHistory.toString()]) {
            return null;
        }
        return super.dls(node, depth, currentHistory);
    }

    constructor(
        @inject('IHistoryService') historyService: IHistoryService,
        @inject('ICubeGraph') graph: ICubeGraph,
        @inject('ICubeService') cubeService: ICubeService
    ) {
        super(historyService, graph, cubeService);
    }

    public exec(cube: ICube): IHistory {
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        fs.readFileSync(
            path.resolve(
                __dirname, '../../../', 'database', 'filtered-duplicates'
            ),
            'utf8'
        ).split('\n').forEach(line => {
            if (line) {
                this.duplicateDictionary[line] = true;
            }
        });
        return this.iddfs(cube);
    }

}
