import { Valueable, IValueable } from "./Valueable";

export const printValue = <T>(o:IValueable<T>): void => console.log(o.value)
export const pritnValueT = <Q, T extends IValueable<Q>>(o: T) => console.log(o.value)
export { Valueable }