import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//download prettier extension for vscode

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Router path="/login">
          <h1>Login</h1>
        </Router>
        <Route path="/">
          <h1>Home Page</h1>
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
