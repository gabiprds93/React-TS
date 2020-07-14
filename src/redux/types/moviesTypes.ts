import MovieModel from "../../models/Movie"

export const MOVIES_LIST_REQUEST = 'MOVIES_LIST_REQUEST'
export const MOVIES_LIST_SUCCESS = 'MOVIES_LIST_SUCCESS'
export const MOVIES_LIST_FAILURE = 'MOVIES_LIST_FAILURE'

export interface IMoviesListRequestAction {
  type: typeof MOVIES_LIST_REQUEST;
}

export interface IMoviesListSuccessAction {
  type: typeof MOVIES_LIST_SUCCESS;
  payload: {
    title: string,
    description: string,
    movies: MovieModel
  };
}

export interface IMoviesListFailureAction {
  type: typeof MOVIES_LIST_FAILURE;
  error: any;
}

export type MoviesActionTypes =
  IMoviesListRequestAction
  | IMoviesListSuccessAction
  | IMoviesListFailureAction
