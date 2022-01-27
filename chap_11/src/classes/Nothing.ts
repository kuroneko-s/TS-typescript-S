import { IMonad } from "../interface/IMonad";
import { _IMaybe } from "../interface/_Maybe";

export class Nothing implements IMonad<null>, _IMaybe<null> {
    static of<T>(value: T = null): Nothing { return new Nothing }
    ap<U>(b: U) { return new Nothing }
    chain<U, V>(fn: (T) => U) { return new Nothing }
    map<U, V>(fn: (x) => U): Nothing { return new Nothing }
    getOrElse<T>(defaultValue: T) { return defaultValue }
    isJust(): boolean { return false }
    isNothing(): boolean { return true }
}   