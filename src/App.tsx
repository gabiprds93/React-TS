import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import RoutePages from './routes';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutePages />
      </Provider>
    </div>
  );
}

export default App;
