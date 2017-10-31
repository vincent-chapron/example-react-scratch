import { applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import logger from './logger'

export default function() {
    const middlewares = [
        promiseMiddleware,
        logger,
    ]

    return applyMiddleware(...middlewares)
}
