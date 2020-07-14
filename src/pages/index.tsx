import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom'

import MoviesPage from './Movies/MoviesPage';

const RootPage = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={MoviesPage}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default RootPage;
