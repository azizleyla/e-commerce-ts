import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={OneProduct} />
      </Switch>
    </div>
  );
}

export default App;
