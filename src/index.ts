import { is1DArray, is2DArray, isJaggedArray } from "./checkInput";
import rotate1D from "./rotateArray1D";
import rotate2D from "./rotateArray2D"

const rotateArray = <T>(array: Array<T> | Array<Array<T>>, steps: number ) => {
    if (is1DArray(array as  Array<T>)) {
        return rotate1D(array as Array<T>, steps)
    } else if (is2DArray(array as Array<Array<T>>) ) {
            if ( isJaggedArray(array as Array<Array<T>>) ) {
                throw new Error("Can not rotate jagged array.")
            } else {
                return rotate2D( array as Array<Array<T>>, steps )
            }
    } else {
        throw new Error("Invalid input.  Provide either a 1 or 2 dimension array.")
    }
};

export default rotateArray;
