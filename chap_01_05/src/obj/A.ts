export class A { 
    value: number = 1
    method: () => void = function() : void { 
        console.log(`value : ${this.value}`)
    }
}

// mehtod 선언시 function 생략 가능

export class B {
    constructor(public value: number = 1) {}
    method(): void {
        console.log(`value : ${this.value}`)
    }
}