export const debounce = (fn: any, ms: number) => {
    let timeout: any

    return function(){
        const calledFunction = () => {// @ts-ignore
            fn.apply(this, arguments)}
        clearTimeout(timeout)
        timeout = setTimeout(calledFunction, ms)
    }
}