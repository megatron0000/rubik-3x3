import { Color } from '../enums/color';
export class FaceCenterRepresentation {

    public up: Color;
    public down: Color;
    public left: Color;
    public right: Color;
    public front: Color;
    public back: Color;

    constructor(centers: {
        up: Color,
        down: Color,
        left: Color,
        right: Color,
        front: Color,
        back: Color
    }) {
        this.up = centers.up;
        this.down = centers.down;
        this.left = centers.left;
        this.right = centers.right;
        this.front = centers.front;
        this.back = centers.back;
    }

}
