import { MoveExecutor } from '../../moves/move-executor';
import { ICubeGraph } from '../i-cube-graph';
import { MoveService } from '../../moves/move-service';
import { ICube } from '../../cube/i-cube';
import { injectable, inject } from 'inversify';

@injectable()
export class CubeGraph implements ICubeGraph {

    constructor(
        @inject(MoveService) private moveService: MoveService
    ) { }

    getChilds(node: ICube): { child: ICube, edge: MoveExecutor }[] {
        return this.moveService.getMoves()
            .map(move => ({
                child: move.exec(node),
                edge: move
            }));
    }
}
