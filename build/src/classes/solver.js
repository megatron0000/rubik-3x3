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
var Solver = (function () {
    function Solver() {
    }
    Solver.prototype.onInit = function (solvedCube) {
        this.solved = solvedCube.toString();
    };
    /**
     * Outputs human-readable movements to be done
     */
    Solver.prototype.solve = function (cube) {
        // let last = (array: Array<Cube>) => {
        //     return array[array.length].clone();
        // };
        var stateStack = [];
        var cubeStack = [];
        var maxMoves = 20;
        var index = 0;
        stateStack.push(cube.toString());
        cubeStack.push(cube.clone());
        var _loop_1 = function () {
            var curr = cubeStack[index].clone();
            console.log(curr + '\n');
            if (curr.simplify(curr.history).split('-').length < maxMoves) {
                curr.doB();
                var identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doBi().doB2();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doB2().doBi();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doB().doD();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doDi().doD2();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doD2().doDi();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doD().doF();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doFi().doF2();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doF2().doFi();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doF().doL();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doLi().doL2();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doL2().doLi();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doL().doR();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doRi().doR2();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doR2().doRi();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doR().doU();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doUi().doU2();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
                curr.doU2().doUi();
                identifier_1 = curr.toString();
                if (!stateStack.find(function (old) { return old === identifier_1; })) {
                    if (identifier_1 === this_1.solved) {
                        return { value: curr.history };
                    }
                    cubeStack.push(curr.clone());
                }
            }
        };
        var this_1 = this;
        for (;; index++) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    return Solver;
}());
Solver = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Solver);
exports.Solver = Solver;
