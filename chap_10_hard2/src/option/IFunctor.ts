// map 메서드가 있는 타입을들 Functor라고 칭한다.
export interface IFunctor<T> {
    map<U>(fn: (value: T) => U)
}