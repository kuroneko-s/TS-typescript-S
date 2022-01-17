import * as R from 'ramda'
import { makeLens, getter, setter, setterUsingFunc } from './lens'
import {IPerson, makeRandomIPerson} from '../person'

const changedName = "albert Einstein"

const nameLens = makeLens('name') // lens를 생성 => 프로퍼티 name에 대한 getter와 setter 밑작업
export const getName = getter(nameLens) // view사용 => getter
export const setName = setter(nameLens) // set사용 => setter
export const setNameUsingFunc = setterUsingFunc(nameLens) // over 사용 => function을 받아서 새로운 객체로 리턴

const person: IPerson = makeRandomIPerson()

export const name = getName(person)
export const newPerson = setName(changedName)(person)
export const anotherPerson = setNameUsingFunc(name => `'Mr.${name}'`)(person)
export const capitalPerson = setNameUsingFunc(R.toUpper)(person)