import { parseNumber } from "../option/parseNumber";

let value = parseNumber('1').map(v => v + 1).map(v => v + 2).getOrElse(0)
console.log(value)

value = parseNumber("hello workd").map(v => v + 1).map(v => v + 2).getOrElse(0)
console.log(value)
