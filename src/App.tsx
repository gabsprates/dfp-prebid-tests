import React from "react";
import "./App.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Artist from "./pages/artist";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link className="App-link" to="/">
              home
            </Link>
            <Link className="App-link" to="/artist/">
              artist
            </Link>
          </nav>
        </header>
        <div>
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/artist/">
              <Artist />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
