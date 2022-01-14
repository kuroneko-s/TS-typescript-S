import { exp, f, square } from "./f";

// a * x ** 2 + b * x + c = 0
// x ** 2 + 2x + 1 = (x + 1) ** 2 => a = 1, b = 2, c = 1 is true

export const quadratic = f(1, 2, 1)
export {exp, square}