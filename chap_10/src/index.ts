import { Valueable, printValue, pritnValueT } from "./printValue";
import { create_2 } from "./create";
import { pick } from "./pick";
import { numberOrString } from './ADT-test'

/*
printValue(new Valueable<number>(1))
printValue(new Valueable<string>("hello"))
printValue(new Valueable<boolean>(true))
printValue(new Valueable<number[]>([1,2,3]))
console.log("===============================")
printValue(new Valueable(1))
printValue(new Valueable("hello"))
printValue(new Valueable(true))
printValue(new Valueable([1,2,3]))
console.log("===============================")
pritnValueT(new Valueable(1))
pritnValueT({value: true})
*/
/*
class Point {constructor(public x: number, public y: number) {}}
[
    create_2(Date),
    create_2(Point, 0, 0)
].forEach(s => console.log(s))

const obj = {name: 'jane', age: 22, city: "seoul", country: "korea"}
console.log(
    pick(obj, ['name', 'age']),
    pick(obj, ['name', 'age']),
)
*/

let ns: numberOrString = 1

const mergeObjects = <T, U>(a: T, b: U): T & U => ({...a, ...b})
const nameAndAge: {name: string} & {age: number} = mergeObjects({name: 'jack'}, {age: 23})
// console.log(nameAndAge)

