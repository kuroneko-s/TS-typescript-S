export const init = (callback: () => void): void => {
    console.log("default init")
    callback()
    console.log("finally init")
}