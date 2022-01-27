import * as R from 'ramda'
import { Just } from "../classes/Just";

console.log(Just.of(100).isJust())
console.log(Just.of(100).isNothing())
console.log(Just.of(100).getOrElse(1))
console.log(Just.of(100).map(R.identity).getOrElse(1))
console.log(Just.of(R.identity).ap(100).getOrElse(1))
console.log(Just.of(100).chain(Just.of).getOrElse(1))

