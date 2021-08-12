import React from "react";
import { Route, Switch } from "react-router";
import SingleMovie from "../../containers/SingleMovie";
import Movies from "../../containers/Movies";
const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route path="/movie/:id" component={SingleMovie} />
  </Switch>
);

export default Main;
