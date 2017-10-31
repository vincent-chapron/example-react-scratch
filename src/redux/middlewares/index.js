import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise'
import logger from './logger'

export default function() {
    const middlewares = [
        thunk,
        promiseMiddleware,
        logger,
    ]

    return applyMiddleware(...middlewares)
}
