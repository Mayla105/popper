import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Men from "./Pages/Men/Men";
import Women from "./Pages/Women/Women";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import ProductPage from "./Pages/ProductPage/ProductPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Men} />
          <Route path="/women" component={Women} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/products/:id" component={ProductPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
