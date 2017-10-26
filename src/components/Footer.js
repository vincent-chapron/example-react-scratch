import React, { Component } from 'react'

export default class Footer extends Component {
  constructor() {
    super()
    this.footer = 'This is the footer component'
    this.state = { email: '' }
  }

  render() {
    return (
      <footer>
        <h4>{this.footer}</h4>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(this.state.email)
        }}>
          <input
            type="email"
            value={this.state.email}
            onChange={e => this.setState({email: e.target.value})} />
          <input type="submit" value="S'inscrire au newsletter !"/>
        </form>
      </footer>
    )
  }
}
