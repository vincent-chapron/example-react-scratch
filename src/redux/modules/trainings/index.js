import { GET_TRAININGS, GET_TRAINING } from './constantes'

const STATE = {
  all: [],
  current: null,
}

export default function (state = STATE, action) {
  switch (action.type) {
    case GET_TRAININGS: {
      const all = action.payload
      return { ...state, all }
    }
    case GET_TRAINING: {
      const current = action.payload
      return { ...state, current }
    } default:
      return state
  }
}
