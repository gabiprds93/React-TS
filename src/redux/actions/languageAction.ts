import {CHANGE_LANGUAGE, ILanguageAction} from '../types/languageTypes'

export const changeLanguage = (language: string): ILanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  }
}