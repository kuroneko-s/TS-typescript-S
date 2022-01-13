export class StringIterable implements Iterable<string> {
    constructor(private strings: string[] = [], private currentIndex: number = 0){}
    [Symbol.iterator](): Iterator<string> { 
        const self = this;
        let currentIndex = self.currentIndex, length = self.strings.length

        function iterator(): Iterator<string> {
            return {
                next(): {value: string, done:boolean} {
                    const value = currentIndex < length ? self.strings[currentIndex++] : undefined
                    const done = value == undefined
                    return {value, done}
                }
            }
        }
        const iterator2: Iterator<string> = {
            next(): {value: string, done:boolean} {
                const value = currentIndex < length ? self.strings[currentIndex++] : undefined
                const done = value == undefined
                return {value, done}
            }
        }

        return iterator2
    }
}