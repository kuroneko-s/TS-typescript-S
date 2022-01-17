import * as R from 'ramda'
import {getter, setter, setterUsingFunc} from "./lens"
import { IPerson, makeRandomIPerson } from '../person'

const longitudeLens = R.lensPath(['location', 'coordinates', 'longitude']) // longitude에 대한 lens 생성
const getLongitude = getter(longitudeLens)
const setLongitude = setter(longitudeLens)
const setLongitudeUsingFunc = setterUsingFunc(longitudeLens)

const person: IPerson = makeRandomIPerson()

const longitude = getLongitude(person)
const newPerson = setLongitude(0.1234567)(person)
const anotherPerson = setLongitudeUsingFunc(R.add(0.1234567))(person)

console.log(longitude, getLongitude(newPerson), getLongitude(anotherPerson))