import { ICubeService } from '../../cube/i-cube-service';
import { ICube } from '../../cube/i-cube';
import { MoveExecutor } from '../move-executor';
import { inject, injectable } from 'inversify';

@injectable()
export class D extends MoveExecutor {

    public constructor(
        @inject('ICubeService') cubeService: ICubeService
    ) {
        super(cubeService);
    }

    public exec(cube: ICube): ICube {
        let representation = cube.getFacesRepresentation();
        let clone = representation.clone();

        /**
         * Update front
         */
        representation.front[6] = clone.left[6];
        representation.front[7] = clone.left[7];
        representation.front[8] = clone.left[8];
        /**
         * Update left
         */
        representation.left[6] = clone.back[6];
        representation.left[7] = clone.back[7];
        representation.left[8] = clone.back[8];
        /**
         * Update back
         */
        representation.back[6] = clone.right[6];
        representation.back[7] = clone.right[7];
        representation.back[8] = clone.right[8];
        /**
         * Update right
         */
        representation.right[6] = clone.front[6];
        representation.right[7] = clone.front[7];
        representation.right[8] = clone.front[8];
        /**
         * Update down
         */
        representation.down[0] = clone.down[6];
        representation.down[1] = clone.down[3];
        representation.down[2] = clone.down[0];
        representation.down[3] = clone.down[7];
        // representation.down[4] = representation.down[4];
        representation.down[5] = clone.down[1];
        representation.down[6] = clone.down[8];
        representation.down[7] = clone.down[5];
        representation.down[8] = clone.down[2];

        return this.cubeService.fromFacesRepresentation(representation);
    }

    public getName(): string {
        return 'D';
    }

}
