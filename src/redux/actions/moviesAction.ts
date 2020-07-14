import { MOVIES_LIST_REQUEST, MOVIES_LIST_SUCCESS, MOVIES_LIST_FAILURE } from '../types/moviesTypes';
import {CALL_API, MOVIES_URL} from '../../constants/api'

export const getMoviesList = () => {
  return {
    [CALL_API]: {
      method: 'GET',
      endpoint: MOVIES_URL,
      types: [MOVIES_LIST_REQUEST, MOVIES_LIST_SUCCESS, MOVIES_LIST_FAILURE],
    }
  }
}