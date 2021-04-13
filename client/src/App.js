import React from "react";
import Search from './pages/Search'
import Nav from "./components/Nav"
import Saved from "./pages/Saved"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
       <Switch>
          <Route path="/">
          <Search />
          </Route>
          <Route path="/saved">
          <Saved />
          </Route>
        </Switch>
        </Router>
  );
}

export default App;
