import { compose } from "./compose"
import { f, g, h } from "./f-g-h"
import { inc } from "./firstOrderFunc"
import { FirstOrderFunc, SecondOrderFunc } from "./highOrderFunc"
import { reduce } from "./reduce"
import { add } from "./secondOrderFunc"
import { add3 } from "./thirdOrderFunc"


type MapRunc<T, R> = (T) => R
type IdentityFunc<T> = MapRunc<T, T>

const numberI: IdentityFunc<number> = (x:number): number => x

const add1: FirstOrderFunc<number, number> = add(1)

const makeNames = () : () => string => {
    const names = ["java", "JS", "TS"]
    let index = 0;

    return (): string => {
        if ( index == names.length ) index = 0
        return names[index++];
    }
}

const makeName: () => string = makeNames()

const composedFGH = compose(h,g,f)
console.log(composedFGH('val'))


const sum = (r, v) => r + v
const sumArray = reduce(sum, 0)
