type callBack = <T>(result, val:T) => T

// (result, val: T) => a + b 서로 더해주는 값
export const fold = <T>(arr: T[], callback: callBack, initValue: T) => {
    let result: T = initValue
    for (let i = 0; i < arr.length; ++i){
        const value = arr[i]
        result = callback(result, value)
    }
    return result
}