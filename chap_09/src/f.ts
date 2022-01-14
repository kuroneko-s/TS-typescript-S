import * as R from 'ramda'

export const exp = (N: number) => (x: number) : number => x ** N
export const square = exp(2)

R.pipe(
    square,
    console.log
)

export type NumberToNumberFunc = (number) => number
export const f = (a: number, b: number, c: number): NumberToNumberFunc => 
            (x: number): number => R.add(
                R.add(
                    R.multiply(a, square(x))
                )(R.multiply(b, x))
                , c
            )

export const f2 = (a: number, b: number, c: number): NumberToNumberFunc => 
                    (x: number): number => a * square(x) + b * x + c
                    // 이게 훨 낫지 않나