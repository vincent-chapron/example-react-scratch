import { createStore, combineReducers, compose } from 'redux'
import getMiddlewares from './middlewares'
import trainings from './modules/trainings'

export default function () {
  const reducers = combineReducers({
    trainings,
  })
  const enhancers = [
    getMiddlewares()
  ]

  return createStore(reducers, compose(...enhancers))
}
