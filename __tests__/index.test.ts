import rotateArray from "../src";
import rotateArray1D from "../src/rotateArray1D"
import { is1DArray, is2DArray, isJaggedArray } from "../src/checkInput";
import rotateArray2D from "../src/rotateArray2D";


test("Check 1D Array Input", () => {
    expect(is1DArray([1,2,3,4])).toBe(true)
});

test("Check 2D Array Input", () => {
    expect(is2DArray([[1,2,3], [1,2,3]])).toBe(true)
});

test("Check if 2D Array is Jagged", () => {
    expect(isJaggedArray([[1,2,3], [1,2,3,4], [1,2,3]])).toBe(true);
});

test("Rotate 1D Array Right", () => {
    expect(rotateArray1D([1,2,3,4], 1)).toEqual([4,1,2,3])
});

test("Rotate 1D Array Left", () => {
    expect(rotateArray1D([1,2,3,4], -1)).toEqual([2,3,4,1])
});

test("Rotate 2D Array Left", () => {
    expect(rotateArray2D([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], -1)).toEqual([ [ 3, 6, 9, 12 ], [ 2, 5, 8, 11 ], [ 1, 4, 7, 10 ] ])
});

test("Rotate 2D Array Right", () => {
    expect(rotateArray2D([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 1)).toEqual([ [ 10, 7, 4, 1 ], [ 11, 8, 5, 2 ], [ 12, 9, 6, 3 ] ])
});

test("Rotate 1D Array Right Using Main Function", () => {
    expect(rotateArray([1,2,3,4], 1)).toEqual([4,1,2,3])
});

test("Rotate 1D Array Left Using Main Function", () => {
    expect(rotateArray([1,2,3,4], -1)).toEqual([2,3,4,1])
});

test("Rotate 2D Array Right Using Main Function", () => {
    expect(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 1)).toEqual([ [ 10, 7, 4, 1 ], [ 11, 8, 5, 2 ], [ 12, 9, 6, 3 ] ])
});

test("Rotate 2D Array Left Using Main Function", () => {
    expect(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], -1)).toEqual([ [ 3, 6, 9, 12 ], [ 2, 5, 8, 11 ], [ 1, 4, 7, 10 ] ])
});

test("Expect 3 Left 2D Rotations to Equal 1 Right 2D Rotation", () => {
    expect(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], -3)).toEqual(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 1))
});

test("Expect 3 Right 2D Rotations to Equal 1 Left 2D Rotation", () => {
    expect(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 3)).toEqual(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], -1))
});

test("Expect Nominal Result From Full Right 2D Rotation", () => {
    expect(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 4)).toEqual([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
});

test("Expect Nominal Result From Full Left 2D Rotation", () => {
    expect(rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], -4)).toEqual([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])
});

test("Reject Jagged 2D Array", () => {
    expect( () => {
        rotateArray([[1,2,3], [1,2], [1,2,3]], 1)
    }).toThrowError("Can not rotate jagged array.")
});