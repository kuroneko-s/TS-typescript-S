import { makePerson, makePersonShort } from "./person/return-object"
import { printPerson } from "./person/destructuring"

// init(() => console.log("custom init")) // front에서 준 함수를 절대로 back에서 사용해선 안된다.

const add1 = (a, b:number) :number => a + b
const add2 = (a: number) : (number) => number => (b:number) : number => a + b

const add3 = (a: number): (number) => number  => {
    return (b:number)  => {
        return a + b
    }
}

const result = add3(1)

// console.log(makePerson("John"))
// console.log(makePerson("man", 15))

// console.log(makePersonShort("John"))
// console.log(makePersonShort("man", 15))

// printPerson(makePersonShort("John"))

const makeObject = (key, value) => ({ [key] : value })

// console.log(makeObject("key", "value"))

type KeyValueType = {
    [key: string] : string
}

// 객체를 return
const makeKeyValueType = (key, value: string) : KeyValueType => ({[key] : value})

// console.log(makeKeyValueType("john", "35"))


import { A, B } from "./obj/A";
import { C, D } from "./obj/static-method"
import { Calculator } from './obj/method-chain'

let a : A = new A()
a.method()

let b : B = new B()
b.method()

let b2 : B = new B(5)
b2.method()

console.log(C.whoAreYou())
console.log(D.whoAreYou())

let calc = new Calculator()
let result = calc.add(1).add(2).add(3).multiply(2)
console.log(result.getValue())

import { range } from "./obj/range"

const strSplit = (str: string, delim: string = ''): string[] => str.split(delim)

let str : string = "Hello"

let strArr = strSplit(str)

for(let value of strArr) {
    console.log(value)
}

const arrayLength = <T>(arr: T[]): number => arr.length

let numArr: number[] = [1,2,3]

arrayLength(numArr)
arrayLength(strArr)

type numbersOfArray = <T>(a:T, number?) => number[]

const testFunc = <T>(a: T, number?: any): any[] => {
    let arr = []
    arr.push(3)
    arr.push(a)
    arr.push(number)
    arr.push(1)
    return arr
}

const normal = (a: <T>(a:T, number?) => any[], b: number): void => {
    console.log(a<number>(b, 'a'))   
}

normal(testFunc, 5)

let numbers = range(1, 9+1)
console.log(numbers)

import { filter } from "./func/fileter"
import { fold } from "./func/fold"
import { map } from "./func/map"
import { range } from "./func/range"

let sum = 0
// 명령형 -> 바로바로 계산해서 넘겨줌 ( pc 자원 친화적 )
for (let val = 1; val <= 100;) sum += val++
console.log(sum) 

let numbers: number[] = range(1, 100+1)
const callBack = (n: number): boolean => n % 2 == 0
let numberFilter = filter<number>(numbers, callBack)


console.log(fold(numbers, (a, b) => a + b, 0))
console.log(fold(numberFilter, (a, b) => a + b, 0))

// 선언형 -> 계산할 값을 새로운 배열로 만들어서 넘겨주고 이걸또 따로 처리해서 값을 넘겨줌

let result = map(numbers, v => v * v)
let strArr = ['1', '2', '3']
console.log(map(strArr, v => v + v))

import { mergeArray } from "./func/mergeArray"
import { pureDelete } from "./func/pureDelete"
import { sort } from "./func/sort"

let numbers = [1,2,3,4,5,6,7,8,9]

let result = numbers.map(v => v + 10)
.filter(v => v % 2 == 0)
.reduce((result, val) => result + val, 1)

console.log(result)

const half = numbers.length / 2

console.log(
    numbers.filter((v, index) => index < half) // array 의 index
)
console.log(
    numbers.filter((v, index) => index >= half)
) 

console.log(...numbers)

let sortTest = [3,6,1,9,0,4]
let arrResult = sort(sortTest)
// sortTest.sort()
console.log(sortTest)
console.log(arrResult)

const mixedArr = [
    [], {name: 'Jack'}, {name: 'Jane', age: 32}, ['description']
]

const objectOnly = pureDelete(mixedArr, (val) => Array.isArray(val))
console.log(objectOnly)

let multiArrResult = mergeArray<any>(
    [1,2,3], [4,5], [6], [7,8,9], [10,11], [12]
)
console.log(multiArrResult)