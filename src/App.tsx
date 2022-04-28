import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";
import Bag from "./pages/Bag";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={OneProduct} />
        <Route path="/bag" component={Bag} />
      </Switch>
    </div>
  );
}

export default App;
