import { Array1D, Array2D } from './types';
declare const is1DArray: <T>(array: Array1D<T>) => boolean;
declare const is2DArray: <T>(array: Array2D<T>) => boolean;
declare const isJaggedArray: <T>(array: Array2D<T>) => boolean;
export { is1DArray, is2DArray, isJaggedArray };
