import { IApply } from "./IApply";

// 자신이 Apply이면서 chain 메서드를 구현하는 인터페이스
export interface IChain<T> extends IApply<T> {
    chain<U>(fn: (T) => U) // 반환을 안할수도 있어서 반환 값을 명시하지 않았음
}