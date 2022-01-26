const callMap_1 = fn => b => b.map(fn)
const callMap_2 = <T, U>(fn: (T) => U) => <T extends {map(fn)}>(b: T) => b.map(fn)

class Monad<T> { // call the type class in Monad
    constructor(public value: T) {}
    static of<U>(value: U) { return new Monad<U>(value)}
    map<U>(fn: (T) => U) {
        return new Monad<U>(fn(this.value))
    }
}

export const callMap_3 = fn => b => Monad.of(b).map(fn).value