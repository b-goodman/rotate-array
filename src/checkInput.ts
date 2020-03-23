
const is1DArray = <T>(array: Array<T> ) => {
    return array.every( el => ! Array.isArray(el) )
};

const is2DArray = <T>(array: Array<Array<T>> ) => {
    return array.every( row => is1DArray<T>(row) );
};

const isJaggedArray = <T>(array: Array<Array<T>> ) => {
    const rowLengths = array.map( row => row.length );
    return ! rowLengths.every( len => len === rowLengths[0] );
};

export {
    is1DArray,
    is2DArray,
    isJaggedArray
};