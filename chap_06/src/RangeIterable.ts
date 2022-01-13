export class RangeIterable { 
    constructor(public from: number, public to: number) {}
    [Symbol.iterator]() { 
        const self = this // RangeIterable 가리킴
        let cursor = self.from 
        return {
            next() {
                const value = cursor < self.to ? cursor++ : undefined
                const done = value == undefined
                return {value, done}
            }
        }
    }
}