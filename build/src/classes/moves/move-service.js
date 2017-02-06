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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var b_1 = require("./implementation/b");
var d_1 = require("./implementation/d");
var f_1 = require("./implementation/f");
var l_1 = require("./implementation/l");
var r_1 = require("./implementation/r");
var u_1 = require("./implementation/u");
var inversify_1 = require("inversify");
var MoveService = (function () {
    function MoveService(U, D, L, R, F, B) {
        this.U = U;
        this.D = D;
        this.L = L;
        this.R = R;
        this.F = F;
        this.B = B;
    }
    MoveService.prototype.getMoves = function () {
        return [this.U, this.D, this.L, this.R, this.F, this.B];
    };
    MoveService.prototype.getNamed = function (name) {
        var found = this.getMoves().find(function (move) { return move.getName() === name; });
        // Normal processing must be halted. Someone request a wrong name
        if (!found) {
            throw new ReferenceError('No move with name specified');
        }
        return found;
    };
    return MoveService;
}());
MoveService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(u_1.U)),
    __param(1, inversify_1.inject(d_1.D)),
    __param(2, inversify_1.inject(l_1.L)),
    __param(3, inversify_1.inject(r_1.R)),
    __param(4, inversify_1.inject(f_1.F)),
    __param(5, inversify_1.inject(b_1.B)),
    __metadata("design:paramtypes", [u_1.U,
        d_1.D,
        l_1.L,
        r_1.R,
        f_1.F,
        b_1.B])
], MoveService);
exports.MoveService = MoveService;
