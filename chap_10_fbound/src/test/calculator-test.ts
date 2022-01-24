import { Calculator } from "../classes/Calculator";

const result = (new Calculator(1)).add(2).add(5).multiply(5).value()

console.log(result)