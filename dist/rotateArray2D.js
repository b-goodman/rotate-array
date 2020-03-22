"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rotLeft2D = (a) => {
    // mxn -> nxm array
    const m = a.length; //rows
    const n = a[0].length; //columns
    const newArray = new Array(n);
    for (let i = 0; i < n; i++) {
        let newRow = new Array(m);
        for (let k = 0; k < m; k++) {
            newRow[k] = a[k][n - i - 1];
        }
        newArray[i] = newRow;
    }
    ;
    return newArray;
};
const rotRight2D = (a) => {
    // mxn -> nxm array
    const m = a.length; //rows
    const n = a[0].length; //columns
    const newArray = new Array(n);
    for (let i = 0; i < n; i++) {
        let newRow = new Array(m);
        for (let k = 0; k < m; k++) {
            newRow[k] = a[m - 1 - k][i];
        }
        newArray[i] = newRow;
    }
    ;
    return newArray;
};
const rotateArray2D = (a, d) => {
    let stepsAbs = Math.abs(d);
    let direction = Math.sign(d);
    // direction == 1 ? console.log("right") : console.log("left");
    // select correct function based on sign of steps param
    const rotateOnce = (array) => direction == 1 ? rotRight2D(array) : rotLeft2D(array);
    if (stepsAbs % 4 > 0) { // prevent unnecessary rotations
        let newRotation = rotateOnce(a); // rotate input array once
        if (stepsAbs >= 2) { // if 2 or more rotations needed
            let stepsCount = stepsAbs - 1;
            // apply rotations while stepsCount is > 0
            const recurse = (accumalate) => {
                const rotatedAccumaltor = rotateOnce(accumalate); //rotate 2nd time
                return --stepsCount == 0 ? rotatedAccumaltor : recurse(rotatedAccumaltor); // rotate again if needed
            };
            return recurse(newRotation);
        }
        else {
            return newRotation;
        }
    }
    else {
        return a; // no net rotation required
    }
};
exports.default = rotateArray2D;
//# sourceMappingURL=rotateArray2D.js.map