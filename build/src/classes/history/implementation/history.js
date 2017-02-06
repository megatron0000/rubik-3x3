"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = require("inversify");
var History = History_1 = (function () {
    function History() {
        this.history = [];
        this.delimiter = '-';
    }
    History.prototype.append = function (move) {
        this.history.push(move);
    };
    History.prototype.toString = function () {
        return this.history.
            map(function (moveExecutor) { return moveExecutor.getName(); }).join(this.delimiter);
    };
    History.prototype.getDelimiter = function () {
        return this.delimiter;
    };
    History.prototype.clone = function () {
        var clone = new History_1();
        this.history.forEach(function (move) { return clone.append(move); });
        return clone;
    };
    return History;
}());
History = History_1 = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], History);
exports.History = History;
var History_1;
