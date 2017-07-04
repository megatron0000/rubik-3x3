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
var IDDFS = (function (_super) {
    __extends(IDDFS, _super);
    function IDDFS(historyService, graph, cubeService) {
        var _this = _super.call(this) || this;
        _this.historyService = historyService;
        _this.graph = graph;
        _this.cubeService = cubeService;
        /**
         * Initialized on exec()
         */
        _this.solvedCube = null;
        return _this;
    }
    IDDFS.prototype.iddfs = function (root) {
        var found;
        for (var depth = 0; depth < 20; depth++) {
            found = this.historyService.create();
            found = this.dls(root, depth, found);
            if (found !== null) {
                return found;
            }
        }
        return null;
    };
    IDDFS.prototype.dls = function (node, depth, currentHistory) {
        var _this = this;
        if (depth === 0 && node.equals(this.solvedCube)) {
            return currentHistory;
        }
        var found = null;
        if (depth > 0) {
            this.graph.getChilds(node).some(function (path) {
                var historyClone = currentHistory.clone();
                historyClone.append(path.edge);
                found = _this.dls(path.child, depth - 1, historyClone);
                return found === null ? false : true;
            });
            if (found !== null) {
                return found;
            }
        }
        return null;
    };
    IDDFS.prototype.exec = function (cube) {
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        return this.iddfs(cube);
    };
    return IDDFS;
}(algorithm_executor_1.AlgorithmExecutor));
IDDFS = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('IHistoryService')),
    __param(1, inversify_1.inject('ICubeGraph')),
    __param(2, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], IDDFS);
exports.IDDFS = IDDFS;
