import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { NotFound } from './Pages/NotFound'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/detail/:id" component={Detail} /> */}
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
