export type Person = {name: string, age: number} 

export const makePersonShort = (name:string, age:number = 10): Person => ({name, age})

export const makePerson = (name: string, age:number = 10): Person => {
    const person = {name, age}
    return person
}