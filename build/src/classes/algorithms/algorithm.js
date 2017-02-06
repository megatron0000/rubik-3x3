"use strict";
var iddfs_1 = require("./implementation/iddfs");
var Algorithm = (function () {
    function Algorithm() {
    }
    Algorithm.prototype.IDDFS = function () {
        return new iddfs_1.IDDFS();
    };
    return Algorithm;
}());
exports.Algorithm = Algorithm;
