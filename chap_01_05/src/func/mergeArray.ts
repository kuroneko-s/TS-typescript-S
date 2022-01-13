export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
    let result: T[] = []
    const len = arrays.length
    for (let index = 0; index < len; index++){
        const arr: T[] = arrays[index]
        result = [...result, ...arr]
    }

    return result
}