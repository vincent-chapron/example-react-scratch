import { createStore, combineReducers } from 'redux'
import trainings from './modules/trainings'

export default function () {
  return createStore(combineReducers({
    trainings,
  }))
}
