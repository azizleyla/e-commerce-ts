import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";
import { useGetProductsQuery } from "./services/ProductsApi";
import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={OneProduct} />
      </Switch>
    </div>
  );
}

export default App;
