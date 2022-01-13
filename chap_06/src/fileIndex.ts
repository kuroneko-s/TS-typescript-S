const awaitReject = async () => {
    throw new Error("error")
}

awaitReject()
    .catch(err => console.log('err: ', err.message))


const readFileAll = async (fileNames: string[]) => {
    return await Promise.all(
        fileNames.map(filename => readFilePromise(filename))
    )
}

readFileAll(
    ['./package.json', './tsconfig.json']
).then(
    ([packageJson, tsconfigJson]: string[]) => {
        console.log("<package.json>", packageJson)
        console.log("<tsconfig.json>", tsconfigJson)
    }
).catch(err => console.log("err : ", err))