// 고차함수 컨테이너의 예시

import { Identity } from "../classes/Identity";
import { IApply } from "../interface/IApply";

const add = x => y => x + y
const id = new Identity(add)

console.log(
    
)