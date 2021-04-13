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
      <div>
      <Nav />
       <Switch>
        <Route path="/saved">
          <Saved />
          </Route>
          <Route path="/">
          <Search />
          </Route>
        </Switch>
        </div>
        </Router>
  );
}

export default App;
