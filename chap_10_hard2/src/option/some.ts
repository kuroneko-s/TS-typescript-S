import { IValueable } from "./IValueable";
import { IFunctor } from "./IFunctor";

export class Some<T> implements IValueable<T>, IFunctor<T> {
    constructor(private value: T) {}
    getOrElse(defaultValue: T) {
        return this.value ?? defaultValue // value가 null or undefined이면 defaultValue를 아니면 value를 return
    }
    map<U>(fn: (value: T) => U) { // 얘의 리턴 타입은 Some<U> or NONE이다.
        return new Some<U>(fn(this.value)) 
    }
}