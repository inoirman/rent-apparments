import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/pages/About";
import Appartments from "../components/pages/Appartments";
import MainPage from "../components/pages/Main";
import News from "../components/pages/News";
import OneNews from "../components/pages/OneNews";

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
        <Route exact path="/news">
          <News />
        </Route>
        <Route path="/news/:id">
          <OneNews />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
