import {CALL_API} from '../constants/api'
import {generalFetch} from '../utils/generalFetch'

const api = (store: { getState: () => any }) => (next: (action: any) => any) => (action: any) => {
  const paramsApi = action[CALL_API]
  if (typeof paramsApi === 'undefined') {
    return next(action)
  }
  const {
    method,
    endpoint,
    types,
  } = paramsApi

  const [requestType, successType, errorType] = types

  next({ type: requestType })

  try {
    return generalFetch(method, endpoint).then(response => {
      console.log('response', response)
      return next({
        type: successType,
        payload: response.movies,
      })
    })
  } catch (err) {
    console.error('Caught an exception!', err)
    return next({
      type: errorType,
      error: err,
    })
  }
}

export default api;