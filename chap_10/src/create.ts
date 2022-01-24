// const create = <T>(type:T): T => new type(); // err 실제 타입인 변수의 type의 타입인 T를 new 생성자로 생성할 순 없다.
const create = <T extends {new(): T}>(type: T): T => new type(); // 위의 타입 제약 구문을 해소하기 위해서 new 연산자를 {}로 묶음
export const create_2 = <T> (type: {new(...a): T}, ...args): T => new type(...args) // 생성자 쪽에 매개변수를 넘기는 방식
