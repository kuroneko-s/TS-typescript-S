import * as R from 'ramda'

type voidToNumberFunc = () => number

const makeRandomNumber = (max: number) : voidToNumberFunc => () : number => Math.floor(Math.random() * max)

const arr = R.range(1, 5 + 1).map(makeRandomNumber(100))
const sortedArr = R.sort((a, b: number): number => a - b)(arr)
console.log(arr, sortedArr)