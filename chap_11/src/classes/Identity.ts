import { ISetoid } from "../interface/ISetoid";
import { IMonad } from '../interface/IMonad'

export class Identity<T> implements ISetoid<T>, IMonad<T> {
    constructor(private _value:T) {}
    value(): T { // IValueable
        return this._value
    }
    equals<U>(that: U): boolean { // ISetoid
        if ( that instanceof Identity ) 
            return this.value() === that.value()
        return false
    }
    map<U>(fn: (x: T) => U) { // IFunctor
        return new Identity<U>(fn(this.value()))
    }
    ap<U>(b: U) { // IApply, 정적 메서드의 반환 타입에 this를 사용할 수 없어서 반환 타입을 생략
        const f = this.value()
        if ( f instanceof Function )
            return Identity.of<U>( (f as Function)(b) )
    }
    static of<T>(value: T): Identity<T> { // IApplicative
        return new Identity<T>(value)
    }
    chain<U>(fn: (T) => U) { // IChain
        // map과 달리 엔도펑터로 구현해야 할 의무가 없어서 map과는 다르다.
        return fn(this.value())
    }
}