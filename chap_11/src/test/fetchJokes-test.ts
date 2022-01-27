import { fetchJokes } from "../fetchJokes";

fetchJokes()
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
