import React, { Component } from 'react'

export default class Footer extends Component {
  constructor() {
    super()
    this.footer = 'This is the footer component'
  }

  render() {
    return React.createElement(
      'footer',
      null,
      React.createElement('h4', null, this.footer),
    )
  }
}
