import * as R from 'ramda'

const substract = a => b => a - b 

const substract10 = substract(10)

export const newArray = R.pipe(
    R.map(substract10),
    R.tap(a => console.log(a))
)

// 특정 함수의 매개변수 순서를 바꿔주는 거임
const reverseSubstract = R.flip(R.subtract)

export const reverseNewArray = R.pipe(
    R.map(reverseSubstract(10)),
    R.tap(a => console.log(a))
)