"use strict";
require("reflect-metadata");
var iddfs_with_duplicates_1 = require("./classes/algorithms/implementation/iddfs-with-duplicates");
var bfs_1 = require("./classes/algorithms/implementation/bfs");
var iddfs_1 = require("./classes/algorithms/implementation/iddfs");
var cube_1 = require("./classes/cube/implementation/cube");
var cube_service_1 = require("./classes/cube/implementation/cube-service");
var cube_graph_1 = require("./classes/graph/implementation/cube-graph");
var handler_1 = require("./classes/handler/implementation/handler");
var history_1 = require("./classes/history/implementation/history");
var history_service_1 = require("./classes/history/implementation/history-service");
var b_1 = require("./classes/moves/implementation/b");
var d_1 = require("./classes/moves/implementation/d");
var f_1 = require("./classes/moves/implementation/f");
var l_1 = require("./classes/moves/implementation/l");
var r_1 = require("./classes/moves/implementation/r");
var u_1 = require("./classes/moves/implementation/u");
var move_service_1 = require("./classes/moves/move-service");
var inversify_1 = require("inversify");
var container = new inversify_1.Container();
exports.container = container;
/**
 * Good Abstractions
 */
container.bind('ICube').to(cube_1.Cube);
container.bind('ICubeService').to(cube_service_1.CubeService);
container.bind('IHistory').to(history_1.History);
container.bind('IHistoryService').to(history_service_1.HistoryService);
container.bind('AbstractHandler').to(handler_1.Handler);
container.bind('ICubeGraph').to(cube_graph_1.CubeGraph);
/**
 * Pure Concretions
 */
container.bind(move_service_1.MoveService).toSelf();
container.bind(u_1.U).toSelf();
container.bind(d_1.D).toSelf();
container.bind(l_1.L).toSelf();
container.bind(r_1.R).toSelf();
container.bind(f_1.F).toSelf();
container.bind(b_1.B).toSelf();
container.bind(iddfs_1.IDDFS).toSelf();
container.bind(bfs_1.BFS).toSelf();
container.bind(iddfs_with_duplicates_1.IDDFSWithDuplicates).toSelf();
