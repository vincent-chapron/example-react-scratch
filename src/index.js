import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'

ReactDOM.render(
  <div>
    <Header />
    <Article title="Mon super titre">
      <div>Lorem ipsum dolor sit amet.</div>
    </Article>
    <Footer />
  </div>,
  document.getElementById('root'),
)
