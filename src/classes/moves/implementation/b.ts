import { ICubeService } from '../../cube/i-cube-service';
import { ICube } from '../../cube/i-cube';
import { MoveExecutor } from '../move-executor';
import { inject, injectable } from 'inversify';

@injectable()
export class B extends MoveExecutor {

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
        representation.up[0] = clone.right[2];
        representation.up[1] = clone.right[5];
        representation.up[2] = clone.right[8];
        /**
         * Update right
         */
        representation.right[2] = clone.down[8];
        representation.right[5] = clone.down[7];
        representation.right[8] = clone.down[6];
        /**
         * Update down
         */
        representation.down[8] = clone.left[6];
        representation.down[7] = clone.left[3];
        representation.down[6] = clone.left[0];
        /**
         * Update left
         */
        representation.left[0] = clone.up[2];
        representation.left[3] = clone.up[1];
        representation.left[6] = clone.up[0];
        /**
         * Update back
         */
        representation.back[0] = clone.back[6];
        representation.back[1] = clone.back[3];
        representation.back[2] = clone.back[0];
        representation.back[3] = clone.back[7];
        // representation.back[4] = representation.back[4];
        representation.back[5] = clone.back[1];
        representation.back[6] = clone.back[8];
        representation.back[7] = clone.back[5];
        representation.back[8] = clone.back[2];

        return this.cubeService.fromFacesRepresentation(representation);

    }

    public getName(): string {
        return 'B';
    }

}
