// Functor는 map 메서드를 제공해주는 인터페이스를 말한다.
// 카테고리 이론에서 Functor는 엔도펑터(endofunctor) 성질을 만족시켜줘야 한다.
export interface IFunctor<T> {
    map<U>(fn: (x: T) => U) // 타입스크립트(v 4.1.3) 엔도펑터를 구현가능케 하는 구문을 제공해주지 않아서 return type을 생략했다.
}