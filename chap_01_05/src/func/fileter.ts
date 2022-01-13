export const filter = <T>(arr: T[], callback: (value:T, index?: number) => boolean): T[] => {
    let result: T[] = []
    const len = arr.length

    for ( let index = 0; index < len; ++index){
        const value = arr[index]
        if (callback(value, index)) result = [...result, value]
    }
    
    return result
}
    