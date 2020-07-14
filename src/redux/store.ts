import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, composeEnhancers);
