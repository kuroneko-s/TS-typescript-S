import { IChain } from "./IChain";
import { IApplicative } from './IApplicative'

// 체인과 애플리커티브를 구현한 것이 모나드
export interface IMonad<T> extends IChain<T>, IApplicative<T> { }
// ap, map, chain, static of 의 구현체 === 모나드 ( by d판타지랜드 규격 )