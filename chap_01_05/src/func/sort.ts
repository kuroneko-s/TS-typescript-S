export const sort = <T>(arr: readonly T[]): T[] => {
    let copy = [...arr]
    return copy.sort()
}