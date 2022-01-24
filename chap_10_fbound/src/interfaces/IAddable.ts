export interface IAddable<T> {
    add(value:T): this // 나를 상속하는 타입을 반환하는 F-Bound Type
}