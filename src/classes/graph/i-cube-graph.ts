import { MoveExecutor } from '../moves/move-executor';
import { ICube } from '../cube/i-cube';
export interface ICubeGraph {
    getChilds(node: ICube): { child: ICube, edge: MoveExecutor }[];
}
