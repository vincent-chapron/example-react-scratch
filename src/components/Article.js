import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Article extends Component {
  constructor() {
    super()
    this.state = { toggle: false }
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <div>
          {(this.state.toggle) ? this.props.children : null}
          <button onClick={() => this.toggle()}>TOGGLE</button>
        </div>
      </article>
    )
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
