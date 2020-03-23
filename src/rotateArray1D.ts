const rotateArray1D = <T>(array: Array<T>, d: number): Array<T> => {
    const newArray: Array<T> = new Array<T>(array.length);
    for (let i = 0; i<array.length; i++) {
        const newIndex=(i+d)%array.length;
        newArray[newIndex < 0 ? newIndex + array.length : newIndex] = array[i]
    };
    return newArray;
}

export default rotateArray1D;