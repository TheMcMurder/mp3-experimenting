export function promiseWithMinTimeWait (promise, minTime = 1500) {
  return promise.then((results) => {
    return new Promise((r) => setTimeout(() => r(results), minTime))
  })
}