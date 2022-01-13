import { ResultType } from "./model/ResultType"

const doSomething = (): ResultType => {
    try{
        throw new Error('some error')
    }catch(e){
        return [false, e.message]
    }
}

const [result, errorMessage] = doSomething()

console.log(result, errorMessage)