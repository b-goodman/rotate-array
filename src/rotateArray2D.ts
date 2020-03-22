import { Array2D } from './types';


const rotLeft2D = <T>(a: Array2D<T>) => {
	// mxn -> nxm array
	const m = a.length; //rows
	const n = a[0].length; //columns
	const newArray = new Array<Array<T>>(n);

	for (let i = 0; i < n; i++) {
		let newRow = new Array<T>(m);
		for (let k = 0; k < m; k++ ) {
			newRow[k] = a[k][n-i-1]
		}
		newArray[i] = newRow;
	};
	return newArray;
}

const rotRight2D = <T>(a: Array2D<T>) => {
	// mxn -> nxm array
	const m = a.length; //rows
	const n = a[0].length; //columns
	const newArray = new Array<Array<T>>(n);

	for (let i = 0; i < n; i++) {
		let newRow = new Array<T>(m);
		for (let k = 0; k < m; k++ ) {
			newRow[k] = a[m-1-k][i]
		}
		newArray[i] = newRow;
	};
	return newArray;
}


const rotateArray2D = <T>(a:Array2D<T>, d: number): Array2D<T> => {
	let stepsAbs = Math.abs(d);
	let direction = Math.sign(d);
	// direction == 1 ? console.log("right") : console.log("left");

	// select correct function based on sign of steps param
	const rotateOnce = (array: Array2D<T>) => direction == 1 ? rotRight2D(array) : rotLeft2D(array)

	if (stepsAbs % 4 > 0) { // prevent unnecessary rotations
		let newRotation = rotateOnce(a); // rotate input array once
		if (stepsAbs >= 2) { // if 2 or more rotations needed
			let stepsCount = stepsAbs - 1;

			// apply rotations while stepsCount is > 0
			const recurse = (accumalate: Array2D<T>): Array2D<T> => {
				const rotatedAccumaltor = rotateOnce(accumalate); //rotate 2nd time
				return --stepsCount == 0 ? rotatedAccumaltor : recurse(rotatedAccumaltor) // rotate again if needed
			};

			return recurse(newRotation);
		} else {
			return newRotation;
		}
	} else {
		return a; // no net rotation required
	}
};


export default rotateArray2D;