"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var algorithm_executor_1 = require("../algorithm-executor");
var inversify_1 = require("inversify");
var BFS = (function (_super) {
    __extends(BFS, _super);
    function BFS(historyService, graph, cubeService) {
        var _this = _super.call(this) || this;
        _this.historyService = historyService;
        _this.graph = graph;
        _this.cubeService = cubeService;
        _this.solvedCube = null;
        return _this;
    }
    BFS.prototype.bfs = function (root, stop) {
        var _this = this;
        var visited = {};
        var orderedVisited = [];
        var index = 0;
        var stopped = false;
        var solution = null;
        visited[root.getStringRepresentation()] = this.historyService.create();
        orderedVisited.push(root.getStringRepresentation());
        var _loop_1 = function () {
            var cube = this_1.cubeService
                .fromStringRepresentation(orderedVisited[index]);
            var currHistory = visited[orderedVisited[index]];
            this_1.graph.getChilds(cube).forEach((function (path) {
                var childHistory = currHistory.clone();
                childHistory.append(path.edge);
                var duplicateOf = visited[path.child.getStringRepresentation()];
                if (stop(path.child, _this.solvedCube, childHistory, duplicateOf)) {
                    stopped = true;
                    // So that it receives only the first where stop() was true
                    solution = solution || childHistory;
                }
                else if (!duplicateOf) {
                    orderedVisited.push(path.child.getStringRepresentation());
                    visited[path.child.getStringRepresentation()] = childHistory;
                }
            }));
            index++;
        };
        var this_1 = this;
        while (!stopped) {
            _loop_1();
        }
        return solution;
    };
    BFS.prototype.exec = function (cube, stop) {
        var _this = this;
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        if (stop) {
            return this.bfs(cube, stop);
        }
        else {
            return this.bfs(cube, function (node) { return node.equals(_this.solvedCube); });
        }
    };
    return BFS;
}(algorithm_executor_1.AlgorithmExecutor));
BFS = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('IHistoryService')),
    __param(1, inversify_1.inject('ICubeGraph')),
    __param(2, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], BFS);
exports.BFS = BFS;
