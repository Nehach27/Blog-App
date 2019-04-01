import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Login from './login';
import SignUp from './signup';
import Blog from './blog';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/blog" component={Blog} />
  </Switch>
)

export default Main;