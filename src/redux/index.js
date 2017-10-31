import { createStore, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { i18nReducer } from 'react-redux-i18n'
import { reducer as formReducer } from 'redux-form'
import getMiddlewares from './middlewares'
import trainings from './modules/trainings'

export default function () {
  console.log(process.env.NODE_ENV)
  const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
  const reducers = combineReducers({
    i18n: i18nReducer,
    form: formReducer,
    trainings,
  })
  const enhancers = [
    getMiddlewares()
  ]

  return createStore(reducers, composeEnhancers(...enhancers))
}
