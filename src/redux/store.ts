import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers';
import logger from '../middleware/logger'

const composeEnhancers = composeWithDevTools(applyMiddleware(logger));

export default createStore(rootReducer, composeEnhancers);
