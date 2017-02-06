import { ICube } from '../i-cube';
import { FaceCenterRepresentation } from '../../face-center-representation';
import { Color } from '../../../enums/color';
import { FacesRepresentation } from '../../faces-representation';
import { injectable } from 'inversify';

@injectable()
export class Cube implements ICube {

    protected faces: FacesRepresentation = new FacesRepresentation();

    protected static getFaceFromString(
        modulusClass: number,
        source: string
    ): Color[] {
        let face: Color[] = [];
        for (let i = 0; i < 9; i++) {
            face.push(parseInt(source[6 * i + modulusClass], 10));
        }
        return face;
    }

    public static fromStringRepresentation(source: string): Cube {
        try {
            let cube = new Cube();
            cube.faces.up = Cube.getFaceFromString(0, source);
            cube.faces.down = Cube.getFaceFromString(1, source);
            cube.faces.left = Cube.getFaceFromString(2, source);
            cube.faces.right = Cube.getFaceFromString(3, source);
            cube.faces.front = Cube.getFaceFromString(4, source);
            cube.faces.back = Cube.getFaceFromString(5, source);
            return cube;
        } catch (e) {
            throw e;
        }
    }

    public static fromFacesRepresentation(source: FacesRepresentation): Cube {
        let cube = new Cube();
        cube.faces = new FacesRepresentation(
            JSON.parse(JSON.stringify(source))
        );
        return cube;
    }

    public getFacesRepresentation(): FacesRepresentation {
        return new FacesRepresentation(
            JSON.parse(JSON.stringify(this.faces))
        );
    }

    public getFaceCenterRepresentation(): FaceCenterRepresentation {
        return new FaceCenterRepresentation({
            up: this.faces.up[4],
            down: this.faces.down[4],
            left: this.faces.left[4],
            right: this.faces.right[4],
            front: this.faces.front[4],
            back: this.faces.back[4]
        });
    }

    public getStringRepresentation(): string {
        let result = '';
        try {
            for (let i = 0; i < 9; i++) {
                result += this.faces.up[i].toString() + this.faces.down[i].toString()
                    + this.faces.left[i].toString() + this.faces.right[i].toString()
                    + this.faces.front[i].toString() + this.faces.back[i].toString();
            }
        } catch (e) {
            // Do nothing
        }
        return result;
    }

    public equals(other: ICube): boolean {
        return this.getStringRepresentation() === other.getStringRepresentation();
    }

}
