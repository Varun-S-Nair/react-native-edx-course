import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MovieListScreen from "./screens/MovieListScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MovieListScreen} />
          <Route path="/details" component={MovieDetailsScreen} />
        </Switch>
      </Router>
    );
  }
}
