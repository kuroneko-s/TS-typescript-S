import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from '../person'

const person: IPerson = makeRandomIPerson()

export const name = R.pipe(
    R.prop('name'), 
    R.tap(console.log)
)
