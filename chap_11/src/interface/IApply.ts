import { IFunctor } from "./IFunctor";

// Apply는 functor이면서 ap라는 메서드를 지원하는 인터페이스
// 얘를 구현하는 컨테이너는 값 컨테이너 뿐만이 아니라 고차함수 컨테이너로서도 동작한다.
export interface IApply<T> extends IFunctor<T> {
    ap<U>(b: U) 
}