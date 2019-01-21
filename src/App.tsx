import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
