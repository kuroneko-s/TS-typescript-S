import { IShape } from "./generic-test";
export const valid = (shape: IShape): number => {
    switch(shape.tag){
        case 'square': return shape.size * shape.size
        case 'rectangle': return shape.width * shape.height
        case 'circle': return Math.PI * shape.radius * shape.radius
    }
    return -1
}