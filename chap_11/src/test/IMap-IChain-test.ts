import { Identity } from "../classes/Identity";

console.log(Identity.of(1).map(v => `the count is ${v}`).value())
console.log(Identity.of(1).chain(v => Identity.of(`the count is ${v}`)).value())