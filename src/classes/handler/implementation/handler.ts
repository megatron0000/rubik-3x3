import { AbstractHandler } from '../abstract-handler';
import { AlgorithmExecutor } from '../../algorithms/algorithm-executor';
import { ICube } from '../../cube/i-cube';
import { IHistory } from '../../history/i-history';
import { MoveExecutor } from '../../moves/move-executor';
import { inject, injectable } from 'inversify';

@injectable()
export class Handler extends AbstractHandler {

    constructor(
        @inject('ICube') cube: ICube,
        @inject('IHistory') history: IHistory
    ) {
        super(cube, history);
    }

    public solve(method: AlgorithmExecutor): IHistory {
        return null;
    }

    public move(move: MoveExecutor) {
        this.cube = move.exec(this.cube);
        this.history.append(move);
    }

    public getHistory(): IHistory {
        return this.history;
    }

}
