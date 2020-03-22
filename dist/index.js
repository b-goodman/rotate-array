"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkInput_1 = require("./checkInput");
const rotateArray1D_1 = __importDefault(require("./rotateArray1D"));
const rotateArray2D_1 = __importDefault(require("./rotateArray2D"));
const rotateArray = (array, steps) => {
    if (checkInput_1.is1DArray(array)) {
        return rotateArray1D_1.default(array, steps);
    }
    else if (checkInput_1.is2DArray(array)) {
        if (checkInput_1.isJaggedArray(array)) {
            throw new Error("Can not rotate jagged array.");
        }
        else {
            return rotateArray2D_1.default(array, steps);
        }
    }
    else {
        throw new Error("Invalid input.  Provide either a 1 or 2 dimension array.");
    }
};
exports.default = rotateArray;
//# sourceMappingURL=index.js.map