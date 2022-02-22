export const throttling = (fn: any, ms: number) => {
    let isThrottling = false
    let lastArgs: any, lastThis: any

    function throttleWrapper(){
        if(isThrottling){
            // @ts-ignore
            lastThis = this
            lastArgs = arguments
            return
        }

        // @ts-ignore
        fn.apply(this, arguments)
        isThrottling = true

        setTimeout(() => {
            isThrottling = false
            if(lastArgs){
                throttleWrapper.apply(lastArgs, lastThis)
                lastArgs = null
                lastThis = null
            }
        }, ms)


    }
    return throttleWrapper
}