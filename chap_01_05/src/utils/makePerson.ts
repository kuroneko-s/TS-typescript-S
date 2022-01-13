export function makePersion(name: string, age: number) {
    return {name, age}
}

export function testMakePersion() {
    console.log(makePersion('jane', 15))
    console.log(makePersion('phone', 35))
}