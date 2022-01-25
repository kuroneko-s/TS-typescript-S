import { parseJson } from "../option/optionJson";

const json = JSON.stringify({name: 'jack', age:32})
let value = parseJson(json).getOrElse({}) // type is json
console.log(value)

value = parseJson('hello world').getOrElse({}) // type is json
console.log(value)