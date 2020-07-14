import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers';
import logger from '../middleware/logger';
import crashReporter from '../middleware/crashReporter';
import api from '../middleware/api';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk, logger, crashReporter, api));

export default createStore(rootReducer, composeEnhancers);
