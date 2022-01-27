import { IMonad } from "../interface/IMonad";
import { Just } from './Just'
import { Nothing } from './Nothing'
import { _IMaybe } from "../interface/_Maybe";

export class Maybe<T> {
    static Just<U>(value: U) { return new Just<U>(value)}
    static Nothing = new Nothing
}

// 3.7.x 버전에서는 해당 타입이 아니면 에러가 난다곤 하는데 4.4.x 버전에서는 에러가 안남
export type IMaybe<T> = _IMaybe<T> | IMonad<T>