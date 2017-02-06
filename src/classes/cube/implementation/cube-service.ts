import { FaceCenterRepresentation } from '../../face-center-representation';
import { ICube } from '../i-cube';
import { FacesRepresentation } from '../../faces-representation';
import { ICubeService } from '../i-cube-service';
import { Cube } from './cube';
import { injectable } from 'inversify';

@injectable()
export class CubeService implements ICubeService {

    public fromStringRepresentation(source: string) {
        return Cube.fromStringRepresentation(source);
    }

    public fromFacesRepresentation(source: FacesRepresentation): ICube {
        return Cube.fromFacesRepresentation(source);
    }

    public createSolved(centers: FaceCenterRepresentation): ICube {
        let faces = new FacesRepresentation();
        for (let i = 0; i < 9; i++) {
            faces.up[i] = centers.up;
            faces.down[i] = centers.down;
            faces.left[i] = centers.left;
            faces.right[i] = centers.right;
            faces.front[i] = centers.front;
            faces.back[i] = centers.back;
        }
        return this.fromFacesRepresentation(faces);
    }

}
