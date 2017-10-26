import { applyMiddleware } from 'redux'
import logger from './logger'

export default function() {
    const middlewares = [
        logger
    ]

    return applyMiddleware(...middlewares)
}
