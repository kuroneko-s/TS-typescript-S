import { Person } from "./return-object";

export const printPerson = ({name, age}: Person): void => console.log(`name : ${name}, age: ${age}`)