export const map = <T, Q> (arr: T[], 
    callback: (val:T, index?: number) => Q): Q[] => {
    let result : Q[] = []
    const len = arr.length
        for (let index = 0; index < len; ++index){
            const value = arr[index]
            result = [...result, callback(value, index)]
        }

    return result
}