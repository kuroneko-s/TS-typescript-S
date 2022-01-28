import { Just } from '../classes/Just'
import '../classes/Maybe'
import { IMaybe, Maybe } from '../classes/Maybe'
import { Nothing } from '../classes/Nothing'

const divide = (a: number) => (b: number): Just<number> | Nothing => b ? Maybe.Just(a/b) : Maybe.Nothing