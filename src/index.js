import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

import createStore from './redux'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import Trainings from './components/Trainings'
import Translations from './translations'

const store = createStore()
ReactDOM.render(
  <Provider store={store} >
    <div>
      <Header />
      <Trainings />
      <Article title="Mon super titre">
        <div>Lorem ipsum dolor sit amet.</div>
      </Article>
      <Footer />
    </div>
  </Provider>,
  document.getElementById('root'),
)
syncTranslationWithStore(store)
store.dispatch(loadTranslations(Translations))
store.dispatch(setLocale(navigator.language))
