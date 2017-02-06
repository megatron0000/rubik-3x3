import { ICube } from '../cube/i-cube';
import { IHistory } from '../history/i-history';
import { injectable } from 'inversify';

@injectable()
export abstract class AlgorithmExecutor {
    abstract exec(cube: ICube): IHistory;
}
