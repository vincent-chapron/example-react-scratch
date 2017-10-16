import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Article extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <div>
          {this.props.children}
        </div>
      </article>
    )
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
