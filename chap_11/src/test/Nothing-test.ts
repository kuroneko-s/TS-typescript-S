import { Nothing } from "../classes/Nothing";
import { Just } from '../classes/Just'

console.log("run - Nothing-test.ts")
console.log(Nothing.of().isJust())
console.log(Nothing.of().isNothing())
console.log(Nothing.of().getOrElse(1))
console.log(Nothing.of().map(x => x + 1).getOrElse(1))
console.log(Nothing.of().ap(1).getOrElse(1))
console.log(Nothing.of().chain(Just.of).getOrElse(1))