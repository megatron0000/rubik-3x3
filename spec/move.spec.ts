import { ICubeService } from '../src/classes/cube/i-cube-service';
import { MoveService } from '../src/classes/moves/move-service';
import { Color } from '../src/enums/color';
import { container } from '../src/inversify.config';
/// <reference types="jasmine" />


let moveService = container.get<MoveService>(MoveService);
let cubeService = container.get<ICubeService>('ICubeService');
let cube = cubeService.createSolved({
    up: Color.BLUE,
    down: Color.GREEN,
    left: Color.ORANGE,
    right: Color.RED,
    front: Color.WHITE,
    back: Color.YELLOW
});

describe('Moves executed on a cube', () => {
    let modifiedCopy = moveService.B.exec(cube);

    it('Should create a copy of the cube (no same memory reference)', () => {
        // Another memory reference
        expect(modifiedCopy).not.toBe(cube);
    });

    it('Should modify its state', () => {
        expect(modifiedCopy.getStringRepresentation())
            .not.toBe(cube.getStringRepresentation());
    });

    it('Should be localizable by name', () => {
        expect(moveService.getNamed('R')).toBe(moveService.R);
    });

});

describe('All moves', () => {
    it('Should have order 4', () => {
        moveService.getMoves().forEach(move => {
            let modifiedCube = move.exec(
                move.exec(
                    move.exec(
                        move.exec(
                            cube
                        )
                    )
                )
            );
            expect(modifiedCube.equals(cube)).toBe(true);
        });
    });
});
