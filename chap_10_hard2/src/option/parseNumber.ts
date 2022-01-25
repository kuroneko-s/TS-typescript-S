import { Option } from "./Option";
import { Optional } from "./types";

export const parseNumber = (n: string): Optional<number> => {
    const value = parseInt(n)
    return isNaN(value) ? Option.None : Option.Some(value)
}