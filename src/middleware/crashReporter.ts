import { Action } from 'redux'

const crashReporter = (store: { getState: () => any }) => (next: (action: Action<string>) => any) => (action: Action<string>) => {
  try {
    console.log('try')
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    throw err
  }
}

export default crashReporter;