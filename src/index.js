import * as workerTimers from 'worker-timers'

const origin = window.location.origin
const key = origin + '_duration'

export const get = () => {
    return Number(localStorage.getItem(key))
}

export const start = () => {
    return workerTimers.setInterval(() => {
        if (!get()) {
            localStorage.setItem(key, 0)
        }
        localStorage.setItem(key, get() + 1)
    }, 1000)
}

export const stop = (id) => {
    workerTimers.clearInterval(id)
}

export const clear = () => {
    localStorage.removeItem(key)
}
