import { ICubeService } from '../../cube/i-cube-service';
import { ICube } from '../../cube/i-cube';
import { MoveExecutor } from '../move-executor';
import { injectable, inject } from 'inversify';

@injectable()
export class F extends MoveExecutor {

    public constructor(
        @inject('ICubeService') cubeService: ICubeService
    ) {
        super(cubeService);
    }

    public exec(cube: ICube): ICube {
        let representation = cube.getFacesRepresentation();
        let clone = representation.clone();

        /**
         * Update up
         */
        representation.up[6] = clone.left[8];
        representation.up[7] = clone.left[5];
        representation.up[8] = clone.left[2];
        /**
         * Update left
         */
        representation.left[2] = clone.down[0];
        representation.left[5] = clone.down[1];
        representation.left[8] = clone.down[2];
        /**
         * Update down
         */
        representation.down[0] = clone.right[6];
        representation.down[1] = clone.right[3];
        representation.down[2] = clone.right[0];
        /**
         * Update right
         */
        representation.right[0] = clone.up[6];
        representation.right[3] = clone.up[7];
        representation.right[6] = clone.up[8];
        /**
         * Update front
         */
        representation.front[0] = clone.front[6];
        representation.front[1] = clone.front[3];
        representation.front[2] = clone.front[0];
        representation.front[3] = clone.front[7];
        // representation.front[4] = representation.front[4];
        representation.front[5] = clone.front[1];
        representation.front[6] = clone.front[8];
        representation.front[7] = clone.front[5];
        representation.front[8] = clone.front[2];

        return this.cubeService.fromFacesRepresentation(representation);
    }

    public getName(): string {
        return 'F';
    }

}
