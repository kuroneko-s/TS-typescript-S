import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from '../model/person'

type voidToNumberFunc = () => number

const makeRandomNumber = (max: number) : voidToNumberFunc => () : number => Math.floor(Math.random() * max)
const personArr: IPerson[] = R.range(1, 3 + 1).map(makeRandomIPerson)

const printPerson = (arr: IPerson[]) => R.map((person: IPerson) => console.log(`{name: ${person.name}, age: ${person.age}}`))(arr)

const arr = R.range(1, 5 + 1).map(makeRandomNumber(100))
const sortedArr = R.sort((a, b: number): number => a - b)(arr)
// console.log(arr, sortedArr)
const sortedByAge = R.sortBy(R.prop("age"))(personArr)
printPerson(personArr)
printPerson(sortedByAge)

// const nameSrotedPersons = R.sortWith([
//     R.ascend(R.prop('age'))
// ])(personArr)

R.pipe(
    R.map((person:IPerson) => R.prop('age')(person)),
    R.tap(console.log)
)(personArr)


R.pipe(
    R.ascend((a:string) => a),
    console.log
)('2', '1')
