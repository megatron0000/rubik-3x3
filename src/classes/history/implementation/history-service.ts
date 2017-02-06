import { IHistory } from '../i-history';
import { History } from './history';
import { IHistoryService } from '../i-history-service';
import { injectable } from 'inversify';

@injectable()
export class HistoryService implements IHistoryService {

    public create(): IHistory {
        return new History();
    }

}
