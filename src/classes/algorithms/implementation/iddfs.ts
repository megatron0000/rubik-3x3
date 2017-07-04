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
    protected solvedCube: ICube = null;

    protected iddfs(root: ICube): IHistory {
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

    protected dls(node: ICube, depth: number, currentHistory: IHistory): IHistory {
        if (depth === 0 && node.equals(this.solvedCube)) {
            return currentHistory;
        }
        let found: IHistory = null;
        if (depth > 0) {
            this.graph.getChilds(node).some(path => {
                let historyClone = currentHistory.clone();
                historyClone.append(path.edge);
                found = this.dls(path.child, depth - 1, historyClone);
                return found === null ? false : true;
            });
            if (found !== null) {
                return found;
            }
        }
        return null;
    }

    constructor(
        @inject('IHistoryService') protected historyService: IHistoryService,
        @inject('ICubeGraph') protected graph: ICubeGraph,
        @inject('ICubeService') protected cubeService: ICubeService
    ) {
        super();
    }

    public exec(cube: ICube): IHistory {
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        return this.iddfs(cube);
    }

}
