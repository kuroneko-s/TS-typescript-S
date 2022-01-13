export const compose = <T, R>(...functions: readonly Function[]): Function =>
     (x: T): ((T) => R) => {
        const deepCopiedFunctions = [...functions]
        return deepCopiedFunctions.reverse()
                .reduce( ( value, func ) => {
                    // console.log(`reduce value - ${value}, func - ${func}`)
                    return func(value)
                }, x )
     }
