import { GET_TRAININGS, GET_TRAINING } from './constantes'

export function getTrainings() {
  return {
    type: GET_TRAININGS,
    payload: ['Docker', 'ReactJS', 'NodeJS'],
  }
}

export function getTraining() {
  return {
    type: GET_TRAINING,
    payload: null,
  }
}
