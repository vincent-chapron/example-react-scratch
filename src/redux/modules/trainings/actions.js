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
  return {
    type: GET_TRAINING,
    payload: null,
  }
}
