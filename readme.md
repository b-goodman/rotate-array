# rotate-array

## Installation

```bash
yarn add @bgoodman/rotate-array
```

## Usage

Import package

```javascript
import rotateArray from "@bgoodman/rotate-array";
```

Run tests

```bash
yarn test
```

## API

### `rotateArray`

Rotate a 1D or 2D array by _n_ steps.  Use `n < 0` for left rotations and `n > 0` for right rotations.

Throws error if attempting to rotate a [jagged array](https://en.wikipedia.org/wiki/Jagged_array).

```typescript
rotateArray: <T>(array: Array<T> | Array<Array<T>>, steps: number) => Array<T> | Array<Array<T>>
```

#### Example

+ rotate a 1D array right

```javascript
rotateArray([1,2,3,4], 1)
//[4,1,2,3]
```

+ Rotate a 1D array left

```javascript
rotateArray([1,2,3,4], -1)
//[2,3,4,1]
```

+ Rotate a 2D array right

```javascript
rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 1)
//([[10,7,4,1], [11,8,5,2], [12,9,6,3]])
```

+ Rotate a 2D array left

```javascript
rotateArray([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], -1)
//[[3,6,9,12], [2,5,8,11], [1,4,7,10]]

