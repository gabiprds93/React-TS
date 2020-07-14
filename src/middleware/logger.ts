import { Action } from 'redux'

const logger = (store: { getState: () => any }) => (next: (action: Action<string>) => any) => (action: Action<string>) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default logger