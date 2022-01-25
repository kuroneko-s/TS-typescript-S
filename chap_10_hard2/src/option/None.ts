import { nullable } from "./nullable";
import { IValueable } from "./IValueable";
import { IFunctor } from "./IFunctor";

export class None implements IValueable<nullable>, IFunctor<nullable> {
    getOrElse<T>(defaultValue: T | nullable) {
        return defaultValue
    }
    map<U>(fn: (T) => U) {
        return new None
    }
}