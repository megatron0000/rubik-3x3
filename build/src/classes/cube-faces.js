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
var color_1 = require("../enums/color");
var inversify_1 = require("inversify");
var CubeFaces = (function () {
    /**
     * Order must be the same indicated inside constructor
     *
     * Use enum Color to fill initial state (if you supply one)
     */
    function CubeFaces() {
        this.isInitialized = false;
    }
    /**
     * True if valid initial state. False otherwise.
     *
     * Only checks if lengths are correct (6 faces with 9 numbers each)
     */
    CubeFaces.prototype.validate = function (state) {
        var valid = state.length === 6;
        for (var i = 0; i < 6; i++) {
            valid = valid && state[i] && state[i].length === 9;
        }
        return valid;
    };
    CubeFaces.prototype.cloneFaces = function () {
        return JSON.parse(JSON.stringify({
            up: this.up,
            down: this.down,
            left: this.left,
            right: this.right,
            front: this.front,
            back: this.back
        }));
    };
    /**
     * Sets faces. Throws error if called more than once
     *
     * Order must be:
     *  - up
     *  - down
     *  - left
     *  - right
     *  - front
     *  - back
     */
    CubeFaces.prototype.onInit = function (state) {
        if (this.isInitialized) {
            throw new Error('Tried to set state, but was already initialized');
        }
        if (!state) {
            this.up = new Array(9);
            this.down = new Array(9);
            this.left = new Array(9);
            this.right = new Array(9);
            this.front = new Array(9);
            this.back = new Array(9);
            for (var i = 0; i < 9; i++) {
                this.up[i] = color_1.Color.BLUE;
                this.down[i] = color_1.Color.GREEN;
                this.left[i] = color_1.Color.ORANGE;
                this.right[i] = color_1.Color.RED;
                this.front[i] = color_1.Color.WHITE;
                this.back[i] = color_1.Color.YELLOW;
            }
        }
        else {
            if (!this.validate(state)) {
                throw new TypeError('Invalid initial state');
            }
            this.up = state[0];
            this.down = state[1];
            this.left = state[2];
            this.right = state[3];
            this.front = state[4];
            this.back = state[5];
        }
        this.isInitialized = true;
    };
    CubeFaces.prototype.toArray = function () {
        var result = [];
        var clone = this.cloneFaces();
        result.push(clone.up);
        result.push(clone.down);
        result.push(clone.left);
        result.push(clone.right);
        result.push(clone.front);
        result.push(clone.back);
        return result;
    };
    CubeFaces.prototype.doR = function () {
        var clone = this.cloneFaces();
        /**
         * Update up
         */
        this.up[2] = clone.front[2];
        this.up[5] = clone.front[5];
        this.up[8] = clone.front[8];
        /**
         * Update front
         */
        this.front[2] = clone.down[2];
        this.front[5] = clone.down[5];
        this.front[8] = clone.down[8];
        /**
         * Update down
         */
        this.down[2] = clone.back[6];
        this.down[5] = clone.back[3];
        this.down[8] = clone.back[0];
        /**
         * Update back
         */
        this.back[0] = clone.up[8];
        this.back[3] = clone.up[5];
        this.back[6] = clone.up[2];
        /**
         * Update right
         */
        this.right[0] = clone.right[6];
        this.right[1] = clone.right[3];
        this.right[2] = clone.right[0];
        this.right[3] = clone.right[7];
        // this.right[4] = clone.right[4];
        this.right[5] = clone.right[1];
        this.right[6] = clone.right[8];
        this.right[7] = clone.right[5];
        this.right[8] = clone.right[2];
        return this;
    };
    CubeFaces.prototype.doL = function () {
        var clone = this.cloneFaces();
        /**
         * Update up
         */
        this.up[0] = clone.back[8];
        this.up[3] = clone.back[5];
        this.up[6] = clone.back[2];
        /**
         * Update back
         */
        this.back[2] = clone.down[6];
        this.back[5] = clone.down[3];
        this.back[8] = clone.down[0];
        /**
         * Update down
         */
        this.down[0] = clone.front[0];
        this.down[3] = clone.front[3];
        this.down[6] = clone.front[6];
        /**
         * Update front
         */
        this.front[0] = clone.up[0];
        this.front[3] = clone.up[3];
        this.front[6] = clone.up[6];
        /**
         * Update left
         */
        this.left[0] = clone.left[6];
        this.left[1] = clone.left[3];
        this.left[2] = clone.left[0];
        this.left[3] = clone.left[7];
        // this.left[4] = this.left[4];
        this.left[5] = clone.left[1];
        this.left[6] = clone.left[8];
        this.left[7] = clone.left[5];
        this.left[8] = clone.left[2];
        return this;
    };
    CubeFaces.prototype.doF = function () {
        var clone = this.cloneFaces();
        /**
         * Update up
         */
        this.up[6] = clone.left[8];
        this.up[7] = clone.left[5];
        this.up[8] = clone.left[2];
        /**
         * Update left
         */
        this.left[2] = clone.down[0];
        this.left[5] = clone.down[1];
        this.left[8] = clone.down[2];
        /**
         * Update down
         */
        this.down[0] = clone.right[6];
        this.down[1] = clone.right[3];
        this.down[2] = clone.right[0];
        /**
         * Update right
         */
        this.right[0] = clone.up[6];
        this.right[3] = clone.up[7];
        this.right[6] = clone.up[8];
        /**
         * Update front
         */
        this.front[0] = clone.front[6];
        this.front[1] = clone.front[3];
        this.front[2] = clone.front[0];
        this.front[3] = clone.front[7];
        // this.front[4] = this.front[4];
        this.front[5] = clone.front[1];
        this.front[6] = clone.front[8];
        this.front[7] = clone.front[5];
        this.front[8] = clone.front[2];
        return this;
    };
    CubeFaces.prototype.doB = function () {
        var clone = this.cloneFaces();
        /**
         * Update up
         */
        this.up[0] = clone.right[2];
        this.up[1] = clone.right[5];
        this.up[2] = clone.right[8];
        /**
         * Update right
         */
        this.right[2] = clone.down[8];
        this.right[5] = clone.down[7];
        this.right[8] = clone.down[6];
        /**
         * Update down
         */
        this.down[8] = clone.left[6];
        this.down[7] = clone.left[3];
        this.down[6] = clone.left[0];
        /**
         * Update left
         */
        this.left[0] = clone.up[2];
        this.left[3] = clone.up[1];
        this.left[6] = clone.up[0];
        /**
         * Update back
         */
        this.back[0] = clone.back[6];
        this.back[1] = clone.back[3];
        this.back[2] = clone.back[0];
        this.back[3] = clone.back[7];
        // this.back[4] = this.back[4];
        this.back[5] = clone.back[1];
        this.back[6] = clone.back[8];
        this.back[7] = clone.back[5];
        this.back[8] = clone.back[2];
        return this;
    };
    CubeFaces.prototype.doU = function () {
        var clone = this.cloneFaces();
        /**
         * Update front
         */
        this.front[0] = clone.right[0];
        this.front[1] = clone.right[1];
        this.front[2] = clone.right[2];
        /**
         * Update right
         */
        this.right[0] = clone.back[0];
        this.right[1] = clone.back[1];
        this.right[2] = clone.back[2];
        /**
         * Update back
         */
        this.back[0] = clone.left[0];
        this.back[1] = clone.left[1];
        this.back[2] = clone.left[2];
        /**
         * Update left
         */
        this.left[0] = clone.front[0];
        this.left[1] = clone.front[1];
        this.left[2] = clone.front[2];
        /**
         * Update up
         */
        this.up[0] = clone.up[6];
        this.up[1] = clone.up[3];
        this.up[2] = clone.up[0];
        this.up[3] = clone.up[7];
        // this.up[4] = this.up[4];
        this.up[5] = clone.up[1];
        this.up[6] = clone.up[8];
        this.up[7] = clone.up[5];
        this.up[8] = clone.up[2];
        return this;
    };
    CubeFaces.prototype.doD = function () {
        var clone = this.cloneFaces();
        /**
         * Update front
         */
        this.front[6] = clone.left[6];
        this.front[7] = clone.left[7];
        this.front[8] = clone.left[8];
        /**
         * Update left
         */
        this.left[6] = clone.back[6];
        this.left[7] = clone.back[7];
        this.left[8] = clone.back[8];
        /**
         * Update back
         */
        this.back[6] = clone.right[6];
        this.back[7] = clone.right[7];
        this.back[8] = clone.right[8];
        /**
         * Update right
         */
        this.right[6] = clone.front[6];
        this.right[7] = clone.front[7];
        this.right[8] = clone.front[8];
        /**
         * Update down
         */
        this.down[0] = clone.down[6];
        this.down[1] = clone.down[3];
        this.down[2] = clone.down[0];
        this.down[3] = clone.down[7];
        // this.down[4] = this.down[4];
        this.down[5] = clone.down[1];
        this.down[6] = clone.down[8];
        this.down[7] = clone.down[5];
        this.down[8] = clone.down[2];
        return this;
    };
    CubeFaces.prototype.doRi = function () {
        this.doR().doR().doR();
        return this;
    };
    CubeFaces.prototype.doLi = function () {
        this.doL().doL().doL();
        return this;
    };
    CubeFaces.prototype.doFi = function () {
        this.doF().doF().doF();
        return this;
    };
    CubeFaces.prototype.doBi = function () {
        this.doB().doB().doB();
        return this;
    };
    CubeFaces.prototype.doUi = function () {
        this.doU().doU().doU();
        return this;
    };
    CubeFaces.prototype.doDi = function () {
        this.doD().doD().doD();
        return this;
    };
    CubeFaces.prototype.doR2 = function () {
        this.doR().doR();
        return this;
    };
    CubeFaces.prototype.doL2 = function () {
        this.doL().doL();
        return this;
    };
    CubeFaces.prototype.doF2 = function () {
        this.doF().doF();
        return this;
    };
    CubeFaces.prototype.doB2 = function () {
        this.doB().doB();
        return this;
    };
    CubeFaces.prototype.doU2 = function () {
        this.doU().doU();
        return this;
    };
    CubeFaces.prototype.doD2 = function () {
        this.doD().doD();
        return this;
    };
    return CubeFaces;
}());
CubeFaces = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], CubeFaces);
exports.CubeFaces = CubeFaces;
