export const sum = (...numbers: number[]): number => 
                numbers.reduce((r: number, s: number) => r + s, 0)