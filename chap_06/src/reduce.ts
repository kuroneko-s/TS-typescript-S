// export const reduce = (f, initValue) => a => a.reduce(f, initValue);

export const reduce = <T>( f: (sum: T, value: T) => T, initValue: T) => 
                        (a: T[]): T => a.reduce(f, initValue);