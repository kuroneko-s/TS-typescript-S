export interface Person {
    name: string;
    age: number;
    job?: string
}

export abstract class Personabs {
    name: string;
    age: number;
    abstract printProperties()
}