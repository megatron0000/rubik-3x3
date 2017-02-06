import { MoveService } from '../src/classes/moves/move-service';
import { AbstractHandler } from '../src/classes/handler/abstract-handler';
import { container } from '../src/inversify.config';
/// <reference types="jasmine" />


let handler = container.get<AbstractHandler>('AbstractHandler');
let moveService = container.get<MoveService>(MoveService);

describe('Cube handler (like... a person)', () => {
    it('Should be able to move his cube and keep track of history', () => {
        handler.move(moveService.B);
        handler.move(moveService.L);
        expect(handler.getHistory().toString()).toBe('B-L');
    });
});
