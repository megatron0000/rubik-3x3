import { IHistoryService } from '../src/classes/history/i-history-service';
import { IHistory } from '../src/classes/history/i-history';
import { MoveService } from '../src/classes/moves/move-service';
import { container } from '../src/inversify.config';

let history = container.get<IHistory>('IHistory');
let move = container.get<MoveService>(MoveService);
let historyService = container.get<IHistoryService>('IHistoryService');

describe('History class', () => {
    it('Should start empty', () => {
        expect(history.toString()).toBe('');
    });

    it('Should self-convert to string with a gettable delimiter', () => {
        history.append(move.B);
        history.append(move.D);
        expect(history.toString()).toBe(
            'B' + history.getDelimiter() + 'D'
        );
    });
});

describe('History service', () => {
    it ('Should create a IHistory instance', () => {
        expect(historyService.create()).toBeDefined();
    })
})