import { Array1D, Array2D } from './types';
import { is1DArray, is2DArray, isJaggedArray } from "./checkInput";
import rotate1D from "./rotateArray1D";
import rotate2D from "./rotateArray2D"

const rotateArray = <T>(array: Array1D<T> | Array2D<T>, steps: number ) => {
    if (is1DArray(array as  Array1D<T>)) {
        return rotate1D(array as Array1D<T>, steps)
    } else if (is2DArray(array as Array2D<T>) ) {
            if ( isJaggedArray(array as Array2D<T>) ) {
                throw new Error("Can not rotate jagged array.")
            } else {
                return rotate2D( array as Array2D<T>, steps )
            }
        } else {
        throw new Error("Invalid input.  Provide either a 1 or 2 dimension array.")
    }
};

export default rotateArray;
