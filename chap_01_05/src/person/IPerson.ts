import { Person } from "./Person"

export class IPerson implements Person{
    constructor(public name: string, public age: number){} // 선언과 동시에 바인딩
}

class TestPerson {
    constructor(public name: string, public age: number, public etc?: string) {}
}

class TestPersonImpl extends TestPerson {
    constructor(public name: string, public age: number, public job: string, public etc?: string) {
        super(name, age)
    }
}
