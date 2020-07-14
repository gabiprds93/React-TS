export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export interface ILanguageAction {
  type: typeof CHANGE_LANGUAGE
  payload: string
}