import { IFunctor } from "./IFunctor"
import { IValueable } from "./IValueable"

export type Optional<T> = IFunctor<T> & IValueable<T>