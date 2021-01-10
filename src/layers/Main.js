import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/pages/About";
import Appartments from "../components/pages/Appartments";
import MainPage from "../components/pages/Main";
import News from "../components/pages/News";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/appartments">
          <Appartments />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
