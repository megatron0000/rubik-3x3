import { MoveExecutor } from './move-executor';
import { B } from './implementation/b';
import { D } from './implementation/d';
import { F } from './implementation/f';
import { L } from './implementation/l';
import { R } from './implementation/r';
import { U } from './implementation/u';
import { inject, injectable } from 'inversify';

@injectable()
export class MoveService {

    constructor(
        @inject(U) public U: U,
        @inject(D) public D: D,
        @inject(L) public L: L,
        @inject(R) public R: R,
        @inject(F) public F: F,
        @inject(B) public B: B
    ) { }

    public getMoves(): MoveExecutor[] {
        return [this.U, this.D, this.L, this.R, this.F, this.B];
    }

    public getNamed(name: string): MoveExecutor {
        let found = this.getMoves().find(move => move.getName() === name);
        // Normal processing must be halted. Someone request a wrong name
        if (!found) {
            throw new ReferenceError('No move with name specified');
        }
        return found;
    }

}
