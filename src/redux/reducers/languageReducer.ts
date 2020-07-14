import {CHANGE_LANGUAGE} from '../types/languageTypes'

const initialState = {
  isLoading: false,
  language: 'es'
}

export const languageReducer = (state = initialState, action: any) => {
  switch(action.type){
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload
      })
      default:
        return state
    }
}