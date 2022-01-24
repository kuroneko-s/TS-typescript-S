// discriminated unions(식별 합집합) 예제
// 여러 타입의 인터페이스들의 각각의 속성들을 가져다가 쓰고싶을때 쓰는 방법

export interface ISquare {tag: 'square', size:number}
export interface IRectangle {tag: 'rectangle', width: number, height: number}
export interface ICircle {tag: 'circle', radius: number}

export type IShape = ISquare | IRectangle | ICircle