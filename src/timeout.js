export const timeout = (ms, promise) => {
  return new Promise((resolve, reject) => {
    promise.then(resolve)
    setTimeout(() => {
      reject(new Error('Timeout occurred'))
    }, ms)
  })
}
