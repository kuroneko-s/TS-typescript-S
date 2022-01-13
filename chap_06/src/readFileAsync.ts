const buf = readFileSync('./package.json')
console.log("동기 멈춰!")
console.log(buf.toString())

readFile('./package.json', (err: Error, buf: Buffer) => {
    console.log("비동기")
    console.log(buf.toString())
})

const readFilePromise = (filename: string): Promise<String> => 
    new Promise<string>((resolve, reject) => {
        readFile(filename, (err: Error, buf: Buffer) => {
            if(err) 
                reject(err)
            else
                resolve(buf.toString())
        })
    }
);

(async () => {
    const content = await readFilePromise("./package.json")
    console.log("async await")
    console.log(content)
})()