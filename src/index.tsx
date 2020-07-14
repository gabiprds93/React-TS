import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import RootPage from './pages';
import './index.css';
import './config/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
