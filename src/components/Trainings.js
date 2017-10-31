import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrainings, getTraining } from '../redux/modules/trainings/actions'

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
            <div key={i} onClick={this.props.getTraining}>{training}</div>
          ))}
        </div>
        <h4>current : {this.props.trainings.current}</h4>
      </section>
    )
  }
}

function mapStateToProps({ trainings }) {
  return { trainings }
}

export default connect(mapStateToProps, { getTrainings, getTraining })(Trainings)
