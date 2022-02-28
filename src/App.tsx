import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
