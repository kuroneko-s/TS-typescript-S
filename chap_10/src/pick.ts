export const pick = <T, K extends keyof T>(obj: T, keys: K[]) => keys.map(key => {
    console.log("make object - ", {[key]: obj[key]})
    /*
        make object -  { name: 'jane' }
        make object -  { age: 22 }
    */
    return ({[key]: obj[key]}) // object를 return 할때 ()로 감사줌 
}).reduce( (result, value) => ({...result, ...value}), {} )