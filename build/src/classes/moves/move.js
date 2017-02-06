"use strict";
var b_1 = require("./b");
var f_1 = require("./f");
var l_1 = require("./l");
var d_1 = require("./d");
var u_1 = require("./u");
var r_1 = require("./r");
var Move = (function () {
    function Move() {
    }
    return Move;
}());
Move.U = new u_1.U();
Move.D = new d_1.D();
Move.L = new l_1.L();
Move.R = new r_1.R();
Move.F = new f_1.F();
Move.B = new b_1.B();
exports.Move = Move;
