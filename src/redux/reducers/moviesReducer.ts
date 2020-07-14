import {MOVIES_LIST_REQUEST, MOVIES_LIST_SUCCESS, MOVIES_LIST_FAILURE, MoviesActionTypes} from '../types/moviesTypes'

const initialState = {
  isLoading: false,
  data: {},
  error: null
}

export const authReducer = (state = initialState, action: MoviesActionTypes) => {
  switch(action.type){
    case MOVIES_LIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        data: {},
        error: null,
      })

    case MOVIES_LIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload,
        error: null,
      })

    case MOVIES_LIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        data: {},
        error: action.error,
      })

    default:
     return state
  }
}