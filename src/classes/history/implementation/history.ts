import { MoveExecutor } from '../../moves/move-executor';
import { IHistory } from '../i-history';
import { injectable } from 'inversify';

@injectable()
export class History implements IHistory {

    protected history: MoveExecutor[];
    protected delimiter: string;

    constructor() {
        this.history = [];
        this.delimiter = '-';
    }

    public append(move: MoveExecutor): void {
        this.history.push(move);
    }

    public toString(): string {
        return this.history.
            map(moveExecutor => moveExecutor.getName()).join(this.delimiter);
    }

    public getDelimiter(): string {
        return this.delimiter;
    }

    public clone(): IHistory {
        let clone = new History();
        this.history.forEach(move => clone.append(move));
        return clone;
    }


}
