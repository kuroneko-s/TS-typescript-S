import * as R from 'ramda'
import { coordinates } from './coordinates-test'
import { square } from './f'
import { location } from './location-test'
import { notRange } from './notRange'
import { person } from './person-test'
import { quadratic } from './quadratic'
import { selectRange } from './selectRange'
import { newArray, reverseNewArray } from './subtractFrom10'
import { sum } from './sum'
import { toCamelCase } from './toCamelCase'
import {name} from '../model/lens/props'
import {modifiedName} from '../model/lens/assoc'
import * as _ from '../model/lens/lens-test'
// import '../model/lens/lensPath-test'
// import './toPairs-test'
// import './fromPairs-test'
import './keys_values-test'

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

// console.log(newNumbers(numbers))

const addIndex = R.pipe(
    R.addIndex(R.map)((v:number, i: number) => {
        console.log(`value - ${v}, index - ${i}`);
        return v + i
    }),
    // R.addIndex(R.map)( (value: number, index: number) => R.add(value)(index) )
    R.tap(a => console.log(a))
)

// const newNumbers_2 = addIndex(R.range(1, 10));

// newArray(R.range(1, 10))
// reverseNewArray(R.range(1, 10))

const input: number[] = R.range(1, 10 + 1)
const quadraticResult = R.pipe(
    R.map(quadratic), // 1,2,1의 결과
    R.tap(n => console.log(n))
)
// (input)


const squareAfterInc = R.pipe(
    R.inc, // + 1
    square // ** 2
)

const squareResult = R.pipe(
    R.map(squareAfterInc),
    R.tap(r => console.log(r))
)
// (R.range(1, 10 + 1))


/*
    lt(a)(b) => a < b
    lte(a)(b) => a <= b
    gt(a)(b) => a > b
    gte(a)(b) => a >= b
*/

R.pipe(
    R.filter(selectRange(3, 6 + 1)),
    // console.log
)(input)

R.pipe(
    R.filter(notRange(3, 6 + 1)),
    // console.log
)(input)

const halfValue = input[input.length / 2]
R.pipe(
    R.map(
        R.ifElse(
            R.lte(halfValue), 
            R.inc,
            R.dec
        )
    ),
    // console.log
)(input)

console.log(
    // toCamelCase(' ')('Hello World'),
    // toCamelCase('_')("Hello_Albert_EINSTEING")
)

// console.log(coordinates)
// console.log(location)
// console.log(person)
// console.log(name)
// console.log(modifiedName)

// console.log(_.name, _.getName(_.newPerson), _.getName(_.anotherPerson), _.getName(_.capitalPerson))
