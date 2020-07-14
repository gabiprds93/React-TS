import { combineReducers } from 'redux'

import { languageReducer } from './languageReducer'
import { moviesReducer } from './moviesReducer'

const rootReducer = combineReducers({
  language: languageReducer,
  movies: moviesReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer