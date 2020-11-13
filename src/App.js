import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navigation from "./Components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <p>Trailworm Home Page</p>
          </Route>
          <Route path="/about" exact>
            <p>Trailworm About Page</p>
          </Route>
          <Route path="/info" exact>
            <p>Trailworm Information Page</p>
          </Route>
          <Route path="/contact" exact>
            <p>Trailworm Contact Page</p>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
