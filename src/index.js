import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './redux'
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import Trainings from './components/Trainings'

ReactDOM.render(
  <Provider store={createStore()} >
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
