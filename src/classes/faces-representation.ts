import { Color } from '../enums/color';
export class FacesRepresentation {

    public up: Color[] = new Array<Color>(9);
    public down: Color[] = new Array<Color>(9);
    public left: Color[] = new Array<Color>(9);
    public right: Color[] = new Array<Color>(9);
    public front: Color[] = new Array<Color>(9);
    public back: Color[] = new Array<Color>(9);

    constructor(parameters?: {
        up: Color[]
        down: Color[]
        left: Color[]
        right: Color[]
        front: Color[]
        back: Color[]
    }) {
        if (parameters) {
            this.up = parameters.up;
            this.down = parameters.down;
            this.left = parameters.left;
            this.right = parameters.right;
            this.front = parameters.front;
            this.back = parameters.back;
        }
    }

    public clone(): FacesRepresentation {
        return JSON.parse(JSON.stringify(this));
    }
}
