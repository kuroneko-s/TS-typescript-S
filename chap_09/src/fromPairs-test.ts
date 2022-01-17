import * as R from "ramda"
import { IPerson, makeRandomIPerson } from "../model/person"

const pairs: [string, any][] = R.toPairs(makeRandomIPerson())
const person: IPerson = R.fromPairs(pairs) as IPerson
console.log("pairs to person - ", person)