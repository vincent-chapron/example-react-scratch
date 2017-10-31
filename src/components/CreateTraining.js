import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const CreateTraining = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="title">First Name</label>
      <Field name="title" component="input" type="text" />
    </div>
  </form>
)

export default reduxForm({
  form: 'add_training',
})(CreateTraining)
