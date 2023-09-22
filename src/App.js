import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Boosting from "./components/Boosting";
import Coaching from "./components/Coaching";
import Home from "./components/Home";
import RecentWorks from "./components/RecentWorks";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./utils/constants";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={ROUTES.BOOSTING}>
        <Boosting />
      </Route>
      <Route path={ROUTES.COACHING}>
        <Coaching />
      </Route>
      <Route path={ROUTES.ABOUTUS}>
        <AboutUs />
      </Route>
      <Route path={ROUTES.RECENTWORKS}>
        <RecentWorks />
      </Route>
    </Switch>
  </div>
);

export default App;
