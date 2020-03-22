import { Array1D } from './types';

const rotateArray1D = <T>(array: Array1D<T>, d: number): Array1D<T> => {
    const newArray: Array1D<T> = new Array<T>(array.length);
    for (let i = 0; i<array.length; i++) {
        const newIndex=(i+d)%array.length;
        newArray[newIndex < 0 ? newIndex + array.length : newIndex] = array[i]
    };
    return newArray;
}

export default rotateArray1D;