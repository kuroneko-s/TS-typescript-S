import fetch from "node-fetch";

export const fetchJokes = <T>() => new Promise<T>( (resolve, reject) => {
    const jokeUrl = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]'

    // fetch version error => 최신 버전은 module 타입이 ESM인 프로젝트에서만 사용이 가능해져서 2.6.1로 다운그레이드 했음
    fetch(jokeUrl)
        .then(res => {
            // console.log(res)
            return res.json()
        })
        .then( (result: unknown) => resolve(result as T) )
        .catch( (err: Error) => reject(err) )
} )