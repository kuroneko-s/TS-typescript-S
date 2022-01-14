import * as R from 'ramda'

type StringToStringFunc = (string) => string

// delim - 구분자
export const toCamelCase = (delim: string): StringToStringFunc => {
    const makeFirstToCapital = (word: string) => {
        const characters = word.split('')
        return characters.map((c, index) => index == 0 ? c.toUpperCase() : c).join('')
    } // 단어의 첫글자를 대문자로
    
    const indexedMap = R.addIndex(R.map) // Map 콜백함수 쪽에 index 부여하는 기능 달고
    return R.pipe(
        R.trim, // 공백제거
        R.tap(n => console.log("trim - ", n)),
        R.split(delim), // 문자열을 배열로 전환
        R.tap(n => console.log("split - ", n)),
        R.map(R.toLower), // 소문자
        R.tap(n => console.log("map toLower - ", n)),
        indexedMap( (value: string, index: number) => index > 0 ? makeFirstToCapital(value) : value ),
        R.tap(n => console.log("indexedMap - ", n)),
        R.join(''),
        R.tap(n => console.log("join - ", n)),
    ) as StringToStringFunc


}