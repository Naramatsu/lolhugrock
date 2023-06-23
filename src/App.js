import React from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Boosting from "./components/Boosting";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/boosting">
          <Boosting />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
