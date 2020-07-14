import {MOVIES_LIST_REQUEST, MOVIES_LIST_SUCCESS, MOVIES_LIST_FAILURE, MoviesActionTypes} from '../types/moviesTypes'

const initialState = {
  isLoading: false,
  data: null,
  error: null
}

export const moviesReducer = (state = initialState, action: MoviesActionTypes) => {
  switch(action.type){
    case MOVIES_LIST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        data: null,
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
        data: null,
        error: action.error,
      })

    default:
     return state
  }
}