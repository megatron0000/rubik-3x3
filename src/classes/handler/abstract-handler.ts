import { ICube } from '../cube/i-cube';
import { AlgorithmExecutor } from '../algorithms/algorithm-executor';
import { IHistory } from '../history/i-history';
import { MoveExecutor } from '../moves/move-executor';
import { injectable } from 'inversify';

@injectable()
export abstract class AbstractHandler {
    constructor(
        protected cube: ICube,
        protected history: IHistory
    ) { }

    public abstract solve(method: AlgorithmExecutor): IHistory;
    public abstract move(move: MoveExecutor): void;
    public abstract getHistory(): IHistory;
}
