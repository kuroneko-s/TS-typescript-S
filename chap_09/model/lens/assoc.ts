import * as R from 'ramda'
import { IPerson, makeRandomIPerson } from '../person'
import { name } from './props'
//setter

const person: IPerson = makeRandomIPerson()
const originalName = name(person)

const modifiedPerson = R.assoc('name', 'Albert Einstein')(person)
export const modifiedName = name(modifiedPerson)

