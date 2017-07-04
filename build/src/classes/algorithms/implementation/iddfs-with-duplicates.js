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
var path = require("path");
var fs = require("fs-extra");
var iddfs_1 = require("./iddfs");
var inversify_1 = require("inversify");
var IDDFSWithDuplicates = (function (_super) {
    __extends(IDDFSWithDuplicates, _super);
    function IDDFSWithDuplicates(historyService, graph, cubeService) {
        var _this = _super.call(this, historyService, graph, cubeService) || this;
        _this.duplicateDictionary = {};
        return _this;
    }
    /**
     * @Overwrite
     */
    IDDFSWithDuplicates.prototype.dls = function (node, depth, currentHistory) {
        if (this.duplicateDictionary[currentHistory.toString()]) {
            return null;
        }
        return _super.prototype.dls.call(this, node, depth, currentHistory);
    };
    IDDFSWithDuplicates.prototype.exec = function (cube) {
        var _this = this;
        this.solvedCube = this.cubeService
            .createSolved(cube.getFaceCenterRepresentation());
        fs.readFileSync(path.resolve(__dirname, '../../../', 'database', 'filtered-duplicates'), 'utf8').split('\n').forEach(function (line) {
            if (line) {
                _this.duplicateDictionary[line] = true;
            }
        });
        return this.iddfs(cube);
    };
    return IDDFSWithDuplicates;
}(iddfs_1.IDDFS));
IDDFSWithDuplicates = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('IHistoryService')),
    __param(1, inversify_1.inject('ICubeGraph')),
    __param(2, inversify_1.inject('ICubeService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], IDDFSWithDuplicates);
exports.IDDFSWithDuplicates = IDDFSWithDuplicates;
