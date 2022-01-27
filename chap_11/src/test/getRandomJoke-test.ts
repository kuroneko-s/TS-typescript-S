import * as R from 'ramda'
import { getRandomJoke, JokeType } from "../getRandomJoke";

getRandomJoke()
    .then( (jokeItem: JokeType) => {
        // const {id, joke, categories} = jokeItem
        // R.view(R.lensProp("joke"))(jokeItem) => 이거 에러남 타입 안맞다고
        const joke = R.prop("joke")(jokeItem)
        console.log(joke)
    } )
    .catch((e: Error) => console.log(e.message))