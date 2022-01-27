import { fetchJokes } from "./fetchJokes"

const random = (max: number) => Math.floor(Math.random() * max)

export type FetchResult = {type: string, value: JokeType[]}
export type JokeType = {id: number, joke: string, categories: string[]}

export const getRandomJoke = () => new Promise<JokeType>( (resolve, reject) => {
    fetchJokes()
        .then( (result: FetchResult) => {
            let array: JokeType[] = result.value
            resolve(array[random(array.length)])
        })
        .catch( (e: Error) => reject(e) )
})