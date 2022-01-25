import { Option } from "./Option";
import { Optional } from "./types";

export const parseJson = <T>(json: string): Optional<T> => {
    try {
        const value = JSON.parse(json)
        return Option.Some(value)
    }catch(e){
        return Option.None
    }
}