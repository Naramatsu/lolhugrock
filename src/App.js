import React from "react";
import AboutUs from "./pages/AboutUs";
import Boosting from "./pages/Boosting";
import Coaching from "./pages/Coaching";
import FrequentQuestion from "./pages/FrequentQuestion";
import Home from "./pages/Home";
import RecentWorks from "./pages/RecentWorks";
import { ROUTES } from "./utils/constants";
import { Switch, Route } from "react-router-dom";

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
      <Route path={ROUTES.FREQUENTQUESTIONS}>
        <FrequentQuestion />
      </Route>
    </Switch>
  </div>
);

export default App;
