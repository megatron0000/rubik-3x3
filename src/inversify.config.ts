import 'reflect-metadata';
import { IDDFSWithDuplicates } from './classes/algorithms/implementation/iddfs-with-duplicates';
import { BFS } from './classes/algorithms/implementation/bfs';
import { IDDFS } from './classes/algorithms/implementation/iddfs';
import { ICube } from './classes/cube/i-cube';
import { ICubeService } from './classes/cube/i-cube-service';
import { Cube } from './classes/cube/implementation/cube';
import { CubeService } from './classes/cube/implementation/cube-service';
import { ICubeGraph } from './classes/graph/i-cube-graph';
import { CubeGraph } from './classes/graph/implementation/cube-graph';
import { AbstractHandler } from './classes/handler/abstract-handler';
import { Handler } from './classes/handler/implementation/handler';
import { IHistory } from './classes/history/i-history';
import { IHistoryService } from './classes/history/i-history-service';
import { History } from './classes/history/implementation/history';
import { HistoryService } from './classes/history/implementation/history-service';
import { B } from './classes/moves/implementation/b';
import { D } from './classes/moves/implementation/d';
import { F } from './classes/moves/implementation/f';
import { L } from './classes/moves/implementation/l';
import { R } from './classes/moves/implementation/r';
import { U } from './classes/moves/implementation/u';
import { MoveService } from './classes/moves/move-service';
import { Container } from 'inversify';

let container = new Container();

/**
 * Good Abstractions
 */
container.bind<ICube>('ICube').to(Cube);
container.bind<ICubeService>('ICubeService').to(CubeService);
container.bind<IHistory>('IHistory').to(History);
container.bind<IHistoryService>('IHistoryService').to(HistoryService);
container.bind<AbstractHandler>('AbstractHandler').to(Handler);
container.bind<ICubeGraph>('ICubeGraph').to(CubeGraph);

/**
 * Pure Concretions
 */
container.bind<MoveService>(MoveService).toSelf();
container.bind<U>(U).toSelf();
container.bind<D>(D).toSelf();
container.bind<L>(L).toSelf();
container.bind<R>(R).toSelf();
container.bind<F>(F).toSelf();
container.bind<B>(B).toSelf();
container.bind<IDDFS>(IDDFS).toSelf();
container.bind<BFS>(BFS).toSelf();
container.bind<IDDFSWithDuplicates>(IDDFSWithDuplicates).toSelf();




export { container }
