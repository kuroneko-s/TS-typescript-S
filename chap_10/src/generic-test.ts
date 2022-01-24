// new(): T => instance를 생성해준다 해당 return type에 맞는
// new(a: number): T => instance를 생성해준다. 단! 해당 인스턴스의 생성자는 number타입의 매개변수를 하나를 받는 인스턴스이고, 이 타입은 T의 타입을 가진다.
export const create = <T>(type: {new(...innerArg): T}, ...args): T => new type(...args)

export const pick = <T, K extends keyof T>(obj: T, keys: K[]) => keys.map(key => ({[key]: obj[key]})).reduce( (result, value) => ({...result, ...value}), {})

export const mergeObjects = <T, U> (a: T, b: U): T & U => ({...a, ...b})

export type IShape = ISquare | IRectangle | ICircle

export interface ISquare { tag: 'square', size: number } // tag default ?
export interface IRectangle { tag: 'rectangle', width: number, height: number }
export interface ICircle { tag: 'circle', radius: number }