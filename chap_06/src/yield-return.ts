export function* gen() {
    let count = 5
    let select = 0
    while(count--) {
        console.log("run gen()'s while")
        //`you select ${select}` 가 동작하고 select가 
        select = yield `you select ${select}`
        console.log(select)
    }
}

export const random = (max, min = 0) => Math.round(Math.random() * (max-min)) + min