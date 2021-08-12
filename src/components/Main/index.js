import React from "react";
import { Route, Switch } from "react-router";
import Movies from "../../containers/Movies/index";
import SingleMovie from "../../containers/SingleMovie";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route path="/movie/:id" component={SingleMovie} />
  </Switch>
);

export default Main;
