import { IApply } from "./IApply";

// 애플리커티브는 어플라이이면서 of 메서드 (정적 메서드)를 제공하는 인터페이스
export interface IApplicative<T> extends IApply<T>{
    // static of(value: T)   
}