import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrainings } from '../redux/modules/trainings/actions'

class Trainings extends Component {
  componentDidMount() {
    this.props.getTrainings()
  }

  render() {
    return (
      <section>
        <h2>Trainings</h2>
        <div>
          {this.props.trainings.all.map((training, i) => (
            <div key={i}>{training}</div>
          ))}
        </div>
      </section>
    )
  }
}

function mapStateToProps({ trainings }) {
  return { trainings }
}

export default connect(mapStateToProps, { getTrainings })(Trainings)
