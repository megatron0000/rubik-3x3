import { ICubeService } from '../../cube/i-cube-service';
import { ICube } from '../../cube/i-cube';
import { MoveExecutor } from '../move-executor';
import { inject, injectable } from 'inversify';

@injectable()
export class L extends MoveExecutor {

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
        representation.up[0] = clone.back[8];
        representation.up[3] = clone.back[5];
        representation.up[6] = clone.back[2];
        /**
         * Update back
         */
        representation.back[2] = clone.down[6];
        representation.back[5] = clone.down[3];
        representation.back[8] = clone.down[0];
        /**
         * Update down
         */
        representation.down[0] = clone.front[0];
        representation.down[3] = clone.front[3];
        representation.down[6] = clone.front[6];
        /**
         * Update front
         */
        representation.front[0] = clone.up[0];
        representation.front[3] = clone.up[3];
        representation.front[6] = clone.up[6];
        /**
         * Update left
         */
        representation.left[0] = clone.left[6];
        representation.left[1] = clone.left[3];
        representation.left[2] = clone.left[0];
        representation.left[3] = clone.left[7];
        // representation.left[4] = clone.left[4];
        representation.left[5] = clone.left[1];
        representation.left[6] = clone.left[8];
        representation.left[7] = clone.left[5];
        representation.left[8] = clone.left[2];

        return this.cubeService.fromFacesRepresentation(representation);

    }

    public getName(): string {
        return 'L';
    }

}
