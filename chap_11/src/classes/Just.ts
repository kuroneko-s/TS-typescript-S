import { IMonad } from '../interface/IMonad'
import { _IMaybe } from '../interface/_Maybe'

export class Just<T> implements IMonad<T>, _IMaybe<T>{
    constructor(private _value: T) {}
    value(): T { return this._value } // ISetoid를 구현하지는 않는데 getOrElse의 동작을 염두
    ap<U>(b: U) { 
        const f = this.value()
        if ( f instanceof Function )
            return Just.of<U>( (f as Function)(b) )
    }
    chain<U>(fn: (T: any) => U) {
        return fn(this.value())
    }
    map<U>(fn: (x: T) => U) {
        return new Just<U>(fn(this.value()))
    }
    static of<T>(value:T): Just<T> { return new Just<T>(value)}
    isJust(): boolean { return true }
    isNothing(): boolean { return false }
    getOrElse<U>(defaultValue: U) { return this.value() }
}