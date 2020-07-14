import { combineReducers } from 'redux'

import { languageReducer } from './languageReducer'
import { moviesReducer } from './moviesReducer'

export const rootReducer = combineReducers({
  languageReducer,
  moviesReducer,
})