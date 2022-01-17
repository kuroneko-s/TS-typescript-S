import * as R from "ramda"
import {IPerson, makeRandomIPerson} from '../model/person'

const person: IPerson = makeRandomIPerson()

const keys = R.keys(person)
const values = R.values(person)

console.log(R.zipObj(keys, values))