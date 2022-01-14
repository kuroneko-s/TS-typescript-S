import { ICoordinates } from "../coordinates";
import { ILocation } from "./ILocation";

export const makeILocation = (
    country: string,
    city: string,
    address: string,
    coordinates: ICoordinates
): ILocation => ({country, city, address, coordinates})