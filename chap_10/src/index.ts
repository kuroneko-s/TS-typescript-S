import { create, mergeObjects, pick, IRectangle, ISquare, ICircle } from "./generic-test";
import { valid } from "./validShape";

const sampleObj = {name: 'janh', age:12, contry: "seoul", job: "coder"}
const line = "======================================================="

console.log(create(Date))
console.log(line)

console.log(pick(sampleObj, ["name", "job"]))
const nameAndAge: {name: string} & {age: number} = mergeObjects({name: "jack"}, {age: 15})
console.log(nameAndAge)
console.log(line)

const square: ISquare = {tag: 'square', size: 10}
const rectangle: IRectangle = {tag: "rectangle", width: 4, height: 5}
const circle: ICircle = {tag: "circle", radius: 10}

console.log(
    `square - ${valid(square)}, rectangle - ${valid(rectangle)}, circle - ${valid(circle)}`
)
console.log(line)
