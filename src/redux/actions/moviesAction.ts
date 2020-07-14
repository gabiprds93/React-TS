import { MOVIES_LIST_REQUEST, MOVIES_LIST_SUCCESS, MOVIES_LIST_FAILURE } from '../types/moviesTypes';
import {CALL_API} from '../../constants/api'

export const getMoviesList = () => {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: 'https://reactnative.dev/movies.json',
      types: [MOVIES_LIST_REQUEST, MOVIES_LIST_SUCCESS, MOVIES_LIST_FAILURE],
    }
  }
}