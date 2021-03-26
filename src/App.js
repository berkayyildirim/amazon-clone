import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"

//download prettier extension for vscode

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

//localhost.com/

//localhost.com/checkout

//localhost.com/login

export default App;
