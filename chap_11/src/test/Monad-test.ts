import { callMap_3 } from "../obj/Monad";

console.log( callMap_3( (a: number[]) => a.map(a => a + 1))([1,2,3]) )