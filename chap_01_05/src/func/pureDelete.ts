export const pureDelete = <T>(arr: readonly T[], cb: (val: T, index?: number) => boolean) : T[] =>
        arr.filter( (val, index) => cb(val, index) == false )