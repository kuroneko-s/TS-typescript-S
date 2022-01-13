import * as R from 'ramda'
import { sum } from './sum'

const numbers: number[] = R.range(1, 9 + 1)
// R.tap(n => console.log(n))(numbers)

// R.pipe(
//     R.tap(n => console.log(n))
// )(numbers)

// const dump = <T>(a: T[]): T[] => R.pipe(
//     R.tap(n => console.log(n))
// )(a)

const dump2 = R.pipe(
    R.tap(n => console.log(n))
)

// dump2(R.range(1, 10))

const curriedSum = R.curryN(3, sum)

// console.log(
//     curriedSum(1),
//     curriedSum(1)(2),
//     curriedSum(1)(2)(3)
// )

const newNumbers = R.pipe(
    R.tap(n => console.log(`before numbers - ${n}`)),
    // R.map(R.inc)
    R.map((n:number) => R.inc(n)),
    R.tap(n => console.log(`after numbers - ${n}`))
)

console.log(newNumbers(numbers))