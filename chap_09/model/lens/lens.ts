import * as R from 'ramda'

export const makeLens = (propName: string) => 
        R.lens(R.prop(propName), R.assoc(propName))

export const getter = (lens) => R.view(lens)
export const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue) // 해당 파라미터를 수정한 객체를 리턴 => 값을 넘김
export const setterUsingFunc = (lens) => <T, R> (func: (T) => R) => R.over(lens, func) // 렌즈와 속성값을 바꾸는 함수를 적용해서 값이 바뀐 새로운 객체를 얻는다. => function을 넘김

const exampleSetterUsingFunc = function(lens) {
        return function<T, R> (func: (T) => R) {
                return R.over(lens, func)
        }
} 
// 객체 내부 프로퍼티 중에서 다른 객체로 이뤄져있는 얘들은 lensPath로 잡아줘야함 (lensPath-test.ts)