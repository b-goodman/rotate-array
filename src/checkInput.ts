import { Array1D, Array2D } from './types';

const is1DArray = <T>(array: Array1D<T> ) => {
    return array.every( el => ! Array.isArray(el) )
};

const is2DArray = <T>(array: Array2D<T> ) => {
    return array.every( row => is1DArray<T>(row) );
};

const isJaggedArray = <T>(array: Array2D<T> ) => {
    const rowLengths = array.map( row => row.length );
    return ! rowLengths.every( len => len === rowLengths[0] );
};

export {
    is1DArray,
    is2DArray,
    isJaggedArray
};