import { ICubeService } from '../../cube/i-cube-service';
import { ICube } from '../../cube/i-cube';
import { ICubeGraph } from '../../graph/i-cube-graph';
import { IHistory } from '../../history/i-history';
import { IHistoryService } from '../../history/i-history-service';
import { AlgorithmExecutor } from '../algorithm-executor';
import { inject, injectable } from 'inversify';


@injectable()
export class IDDFS extends AlgorithmExecutor {

    /**
     * Initialized on exec()
     */
    private solvedCube: ICube = null;

    private iddfs(root: ICube): IHistory {
        let found: IHistory;
        for (let depth = 0; depth < 20; depth++) {
            found = this.historyService.create();
            found = this.dls(root, depth, found);
            if (found !== null) {
                return found;
            }
        }
        return null;
    }

    private dls(node: ICube, depth: number, currentHistory: IHistory): IHistory {
        if (depth === 0 && node.equals(this.solvedCube)) {
            return currentHistory;
        }
        let found: IHistory = null;
        if (depth > 0) {
            this.graph.getChilds(node).forEach(path => {
                let historyClone = currentHistory.clone();
                historyClone.append(path.edge);
                found = this.dls(path.child, depth - 1, historyClone);
            });
            if (found !== null) {
                return found;
            }
        }
        return null;
    }

    constructor(
        @inject('IHistoryService') private historyService: IHistoryService,
        @inject('ICubeGraph') private graph: ICubeGraph,
        @inject('ICubeService') private cubeService: ICubeService
    ) {
        super();
    }

    public exec(cube: ICube): IHistory {
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        return this.iddfs(cube);
    }

}
