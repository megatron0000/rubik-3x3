import { ICubeService } from '../cube/i-cube-service';
import { ICube } from '../cube/i-cube';
import { inject, injectable } from 'inversify';

@injectable()
export abstract class MoveExecutor {

    constructor(
        @inject('ICubeService') protected cubeService: ICubeService
    ) { }

    abstract exec(cube: ICube): ICube;
    abstract getName(): string;
    public invert(): MoveExecutor {
        return null;
    }
}
