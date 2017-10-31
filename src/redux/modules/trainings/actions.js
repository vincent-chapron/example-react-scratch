import { GET_TRAININGS, GET_TRAINING } from './constantes'

export function getTrainings() {
  return {
    type: GET_TRAININGS,
    payload: new Promise(resolve => {
      setTimeout(() => resolve(['Docker', 'ReactJS', 'NodeJS']), 2000)
    }),
  }
}

export function getTraining() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: GET_TRAINING,
        payload: 'Docker',
      })
    }, 1000)
  }
}
