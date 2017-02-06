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
var abstract_handler_1 = require("../abstract-handler");
var inversify_1 = require("inversify");
var Handler = (function (_super) {
    __extends(Handler, _super);
    function Handler(cube, history) {
        return _super.call(this, cube, history) || this;
    }
    Handler.prototype.solve = function (method) {
        return null;
    };
    Handler.prototype.move = function (move) {
        this.cube = move.exec(this.cube);
        this.history.append(move);
    };
    Handler.prototype.getHistory = function () {
        return this.history;
    };
    return Handler;
}(abstract_handler_1.AbstractHandler));
Handler = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject('ICube')),
    __param(1, inversify_1.inject('IHistory')),
    __metadata("design:paramtypes", [Object, Object])
], Handler);
exports.Handler = Handler;
