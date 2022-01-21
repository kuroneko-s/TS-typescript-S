import * as R from 'ramda'
import { reverseNewArray } from './subtractFrom10'

const numbers: number[] = R.range(1, 3 + 1)

// R.identity 입력받은 값을 고대로 다시 리턴해줌
const _identity = n => n
R.pipe(
    R.identity,
    // R.tap(console.log)
)(numbers)

R.pipe(
    _identity,
    // R.tap(console.log)
)(numbers)

// R.chain 매개변수의 갯수에 따라 동작하는 방식이 달라진다.
// 매개변수가 한개일 경우 flatMap처럼 동작한다.
const flatMap = f => R.pipe(
    R.map(f),
    R.flatten
)
R.pipe(
    R.chain(n => [n, n]),
    // R.tap(console.log) // [ 1, 1, 2, 2, 3, 3 ]
)(numbers)
R.pipe(
    flatMap(n => [n,n]),
    // R.tap(console.log)
)(numbers)

const chainTwoFunc = (f, s) => (x) => f(s(x), x)
R.pipe(
    R.chain(R.append, R.head),
    // R.tap(console.log) // [ 1, 2, 3, 1 ]
)(numbers)
R.pipe(
    chainTwoFunc(R.append, R.head),
    // R.tap(console.log) // [ 1, 2, 3, 1 ]
)(numbers)

const flip = cb => a => b => cb(b)(a)
const reverseSubtract = flip(R.subtract) // -
R.pipe(
    R.map(reverseSubtract(10)),
    // R.tap(console.log)
)(R.range(1, 9 + 1))


const applyDiscount = (min:number, discount: number) => R.pipe(
    R.ifElse(
        R.flip(R.gte)(min),
        R.flip(R.subtract)(discount),
        R.identity
    ),
    R.tap(console.log)
)
// gte -> >=
// a >= b ===> b >= a
// (5000)(R.gte)(6000)

// applyDiscount(5000, 500)(6000)
// applyDiscount(5000, 500)(4500)

// R.always === always 
const always = x => y => x
R.flip(always) // y => x => y

const first = <T>(a: T) => (b: T) => always(a)(b)
const second = <T>(a: T) => (b: T) => flip(always)(a)(b)

// console.log(
//     first(1)(2),
//     second(1)(2)
// )

const applyTo = value => cb => cb(value)

const valueFunc = value => R.pipe(
    R.applyTo(value),
    R.tap(console.log)
)

const value100 = valueFunc(100)
// value100(R.identity)
// value100(R.add(1))

// const ap = <T, Q>(cbArr: T => T[]) => (arr: Q[]) => cbArr.map(cb => cb(...arr))
const callAndAppend = R.pipe(
    R.ap([R.multiply(2)]),
    // R.tap(console.log)
)(numbers)

const callAndAppend2 = R.pipe(
    R.ap([R.multiply(2), R.add(10)]),
    R.tap(console.log)
)(numbers)