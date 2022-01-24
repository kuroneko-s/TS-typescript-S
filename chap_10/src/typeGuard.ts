export class Bird { fly() { console.log("I'm flying.")}}
export class Fish { swim() { console.log("I'm swimming.")}}

// type-guard => 타입을 변환하지 않은 코드 떄문에 프로그램이 비정상 종료되는 상황을 보호해준다라는 의미임
const flyOrSwim = (o: Bird | Fish) => { 
    // ??? 
}

export const isBird = (o: Bird | Fish): o is Bird => o instanceof Bird
export const isFish = (o: Bird | Fish): o is Fish => o instanceof Fish