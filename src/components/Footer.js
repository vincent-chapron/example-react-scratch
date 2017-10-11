import React, { Component } from 'react'

export default class Footer extends Component {
  constructor() {
    super()
    this.footer = 'This is the footer component'
  }

  render() {
    return (
      <footer>
        <h4>{this.footer}</h4>
      </footer>
    )
  }
}
