import { MoveExecutor } from '../moves/move-executor';

export interface IHistory {
    append(move: MoveExecutor): void;
    toString(): string;
    getDelimiter(): string;
    clone(): IHistory;
}
