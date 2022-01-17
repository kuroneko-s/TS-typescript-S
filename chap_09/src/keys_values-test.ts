import * as R from "ramda"
import { IPerson, makeRandomIPerson } from "../model/person"

const person : IPerson = makeRandomIPerson()

const keys: string[] = R.keys(person)
console.log("keys : ", keys)
const values: any[] = R.values(person)
console.log("values : ", values)