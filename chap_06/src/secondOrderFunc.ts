import { FirstOrderFunc, SecondOrderFunc } from "./highOrderFunc";

export const add: SecondOrderFunc<number, number> = 
    (x: number): FirstOrderFunc<number, number> => 
    (y: number): number => x + y