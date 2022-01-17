import * as R from 'ramda'

const arr = R.range(1, 2 + 1)
                .map(x => R.range(1, 2 + 1)
                .map(y => [x, y]))

console.log("before - ", arr)

const flattendArr = R.flatten(arr)
console.log("flatten after - ", flattendArr)

const unnestArr = R.unnest(arr)
console.log("unnest once after - ", unnestArr)

const secondUnnestArr = R.unnest(unnestArr)
console.log("unnest twice after - ", secondUnnestArr)