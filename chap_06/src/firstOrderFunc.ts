import { FirstOrderFunc } from "./highOrderFunc";

export const inc: FirstOrderFunc<number, number> = (n: number): number => n + 1
