import { Color } from '../src/enums/color';
import { ICubeService } from '../src/classes/cube/i-cube-service';
import { ICube } from '../src/classes/cube/i-cube';
import { container } from '../src/inversify.config';


/// <reference types="jasmine" />

let iCubeService = container.get<ICubeService>('ICubeService');

describe('ICube implementation', () => {
    let icube = container.get<ICube>('ICube');

    it('Should have empty string representation', () => {
        expect(icube.getStringRepresentation()).toBe('');
    });

    it('Should have a FacesRepresentation with 9-length trash array faces', () => {
        expect(icube.getFacesRepresentation()).toBeTruthy();
        expect(icube.getFacesRepresentation().up.length).toBe(9);
        expect(icube.getFacesRepresentation().down.length).toBe(9);
        expect(icube.getFacesRepresentation().left.length).toBe(9);
        expect(icube.getFacesRepresentation().right.length).toBe(9);
        expect(icube.getFacesRepresentation().front.length).toBe(9);
        expect(icube.getFacesRepresentation().back.length).toBe(9);
    });

    it('Should self-convert to string representation correctly', () => {
        let solvedCube = iCubeService.createSolved({
            up: Color.BLUE,
            down: Color.GREEN,
            left: Color.ORANGE,
            right: Color.RED,
            front: Color.WHITE,
            back: Color.YELLOW
        });
        let stringRepresentation = solvedCube.getStringRepresentation();
        let part = [
            Color.BLUE,
            Color.GREEN,
            Color.ORANGE,
            Color.RED,
            Color.WHITE,
            Color.YELLOW
        ].join('');
        let shouldBe = part
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part)
            .concat(part);
        expect(stringRepresentation).toEqual(shouldBe);
    });

    it('Should self-convert to FacesRepresentation', () => {
        let solvedCube = iCubeService.createSolved({
            up: Color.BLUE,
            down: Color.GREEN,
            left: Color.ORANGE,
            right: Color.RED,
            front: Color.WHITE,
            back: Color.YELLOW
        });
        expect(
            iCubeService.fromFacesRepresentation(
                solvedCube.getFacesRepresentation()
            )
            .getStringRepresentation().length
        ).toBe(54);
    });
});

describe('ICubeService', () => {
    let solvedCube = iCubeService.createSolved({
        up: Color.BLUE,
        down: Color.GREEN,
        left: Color.ORANGE,
        right: Color.RED,
        front: Color.WHITE,
        back: Color.YELLOW
    });

    it('Should create solved cube correctly filled with Colors', () => {
        let faces = solvedCube.getFacesRepresentation();
        expect(faces.up.every(el => el === Color.BLUE));
        expect(faces.down.every(el => el === Color.GREEN));
        expect(faces.left.every(el => el === Color.ORANGE));
        expect(faces.right.every(el => el === Color.RED));
        expect(faces.front.every(el => el === Color.WHITE));
        expect(faces.back.every(el => el === Color.YELLOW));
    });

    it('Should create from string', () => {
        let cube = iCubeService.fromStringRepresentation(
            '012345012345012345012345012345012345012345012345012345'
        );
        expect(cube).toBeDefined();
        expect(cube.getStringRepresentation()).toBe(
            '012345012345012345012345012345012345012345012345012345'
        );
    });
});
