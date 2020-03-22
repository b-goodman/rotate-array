"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotateArray1D = (array, d) => {
    const newArray = new Array(array.length);
    for (let i = 0; i < array.length; i++) {
        const newIndex = (i + d) % array.length;
        newArray[newIndex < 0 ? newIndex + array.length : newIndex] = array[i];
    }
    ;
    return newArray;
};
exports.default = rotateArray1D;
//# sourceMappingURL=rotateArray1D.js.map