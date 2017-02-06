import { ICube } from '../../cube/i-cube';
import { ICubeService } from '../../cube/i-cube-service';
import { ICubeGraph } from '../../graph/i-cube-graph';
import { IHistory } from '../../history/i-history';
import { IHistoryService } from '../../history/i-history-service';
import { AlgorithmExecutor } from '../algorithm-executor';
import { inject, injectable } from 'inversify';

interface IStopFunction {
    (node: ICube, solved: ICube, history: IHistory, duplicateOf: IHistory): boolean;
}

@injectable()
export class BFS extends AlgorithmExecutor {

    private solvedCube: ICube = null;

    private bfs(root: ICube, stop: IStopFunction): IHistory {
        let visited: {
            [index: string]: IHistory
        } = {};
        let orderedVisited: string[] = [];
        let index = 0;
        let stopped = false;
        let solution: IHistory = null;
        visited[root.getStringRepresentation()] = this.historyService.create();
        orderedVisited.push(root.getStringRepresentation());
        while (!stopped) {
            let cube = this.cubeService
                .fromStringRepresentation(orderedVisited[index]);
            let currHistory = visited[orderedVisited[index]];
            this.graph.getChilds(cube).forEach((path => {
                let childHistory = currHistory.clone();
                childHistory.append(path.edge);
                let duplicateOf = visited[path.child.getStringRepresentation()];
                if (stop(path.child, this.solvedCube, childHistory, duplicateOf)) {
                    stopped = true;
                    // So that it receives only the first where stop() was true
                    solution = solution || childHistory;
                } else if (!duplicateOf) {
                    orderedVisited.push(path.child.getStringRepresentation());
                    visited[path.child.getStringRepresentation()] = childHistory;
                }
            }));
            index++;
        }
        return solution;
    }


    constructor(
        @inject('IHistoryService') private historyService: IHistoryService,
        @inject('ICubeGraph') private graph: ICubeGraph,
        @inject('ICubeService') private cubeService: ICubeService
    ) {
        super();
    }

    public exec(cube: ICube, stop?: IStopFunction): IHistory {
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        if (stop) {
            return this.bfs(cube, stop);
        } else {
            return this.bfs(cube, node => node.equals(this.solvedCube));
        }
    }


}
