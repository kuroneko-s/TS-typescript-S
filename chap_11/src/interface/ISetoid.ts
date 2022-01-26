import { IValueable } from "./IValuable";

// setoid는 equals 이름의 메서드를 제공하는 인터페이스를 의미한다.
export interface ISetoid<T> extends IValueable<T>{
    equals<U>(value: U): boolean
}