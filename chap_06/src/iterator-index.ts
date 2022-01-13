import { createRangeIterable } from "./createRangeIterable";
import { RangeIterable } from "./RangeIterable";
import { StringIterable } from "./StringIterable";

const iterator = createRangeIterable(1, 3 + 1)
while(true) {
    const {value, done} = iterator.next()
    if (done) break
    console.log(value)
}

const iteratorByClass = new RangeIterable(10, 13 + 1)
// console.log(iteratorByClass[Symbol.iterator]().next())

for (let val of iteratorByClass){
    console.log(val)
}

for (let value of new StringIterable(['hello', "world", "!"]))
    console.log(value)

    import { generator } from "./generator";
import { gen, random } from './yield-return';

for (let v of generator()){
    console.log(v)
}

const iter = gen()
while(true) {
    const { value, done } = iter.next(random(10, 1))
    if(done) break;
    console.log( value )
}
