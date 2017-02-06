"use strict";
var History = (function () {
    function History() {
        this.history = [];
    }
    History.prototype.append = function (move) {
        this.history.push(move);
    };
    History.prototype.toString = function () {
        return this.history.map(function (moveExecutor) { return moveExecutor.getName(); }).join('-');
    };
    return History;
}());
exports.History = History;
