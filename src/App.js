import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

import StateIndex from "./Hooks/useState/index";
import EffectIndex from "./Hooks/useEffect/index";

import Header from './Header';

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/state" component={StateIndex} />
          <Route exact path="/effect" component={EffectIndex} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;