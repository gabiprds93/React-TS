import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import MoviesPage from '../pages/Movies/MoviesPage';
import HomePage from '../pages/HomePage';
import listRoutes from '../config/listRoutes'

const RootPage = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={listRoutes.ROOT} component={HomePage}></Route>
          <Route exact path={listRoutes.MOVIES} component={MoviesPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RootPage;
