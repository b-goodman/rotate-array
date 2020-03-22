"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is1DArray = (array) => {
    return array.every(el => !Array.isArray(el));
};
exports.is1DArray = is1DArray;
const is2DArray = (array) => {
    return array.every(row => is1DArray(row));
};
exports.is2DArray = is2DArray;
const isJaggedArray = (array) => {
    const rowLengths = array.map(row => row.length);
    return !rowLengths.every(len => len === rowLengths[0]);
};
exports.isJaggedArray = isJaggedArray;
//# sourceMappingURL=checkInput.js.map