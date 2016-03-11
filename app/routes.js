import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import TodoPage from './containers/TodoPageContainer.js'
import DetailPage from './containers/DetailPageContainer.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoPage} />
    <Route path="/detail" component={DetailPage} />
  </Route>
);
