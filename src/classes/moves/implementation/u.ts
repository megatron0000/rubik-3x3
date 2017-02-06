import { ICubeService } from '../../cube/i-cube-service';
import { ICube } from '../../cube/i-cube';
import { MoveExecutor } from '../move-executor';
import { inject, injectable } from 'inversify';

@injectable()
export class U extends MoveExecutor {

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
        representation.front[0] = clone.right[0];
        representation.front[1] = clone.right[1];
        representation.front[2] = clone.right[2];
        /**
         * Update right
         */
        representation.right[0] = clone.back[0];
        representation.right[1] = clone.back[1];
        representation.right[2] = clone.back[2];
        /**
         * Update back
         */
        representation.back[0] = clone.left[0];
        representation.back[1] = clone.left[1];
        representation.back[2] = clone.left[2];
        /**
         * Update left
         */
        representation.left[0] = clone.front[0];
        representation.left[1] = clone.front[1];
        representation.left[2] = clone.front[2];
        /**
         * Update up
         */
        representation.up[0] = clone.up[6];
        representation.up[1] = clone.up[3];
        representation.up[2] = clone.up[0];
        representation.up[3] = clone.up[7];
        // representation.up[4] = representation.up[4];
        representation.up[5] = clone.up[1];
        representation.up[6] = clone.up[8];
        representation.up[7] = clone.up[5];
        representation.up[8] = clone.up[2];

        return this.cubeService.fromFacesRepresentation(representation);

    }

    public getName(): string {
        return 'U';
    }

}
