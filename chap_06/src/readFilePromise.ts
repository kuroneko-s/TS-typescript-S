import { readFile } from "fs"

export const readFilePromise = (filename: string): Promise<string> => {
    return new Promise<string>(
        (resolve: (value: string) => void,
        reject: (err: Error) => void) => {
            readFile(filename, (err: Error, buf: Buffer) => {
                if(err) reject(err)
                else resolve(buf.toString())
            })
        }
    )
}

type resolve = (value: string) => void
type reject = (err: Error) => void

new Promise(
    (resolve: resolve, reject: reject) => {
        resolve("Test");
        reject(new Error("new err"))
})