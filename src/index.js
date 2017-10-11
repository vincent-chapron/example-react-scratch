import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(Header),
    React.createElement(Footer),
  ),
  document.getElementById('root'),
)
