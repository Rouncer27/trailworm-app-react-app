import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import PrivateRoute from "./Components/routing/PrivateRoute";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Starting from "./Components/Starting";
import Trails from "./Components/Trails";
import Camping from "./Components/Camping";
import CreateProfile from "./Components/profile-forms/CreateProfile";
import EditProfile from "./Components/profile-forms/EditProfile";
import AddExperience from "./Components/profile-forms/AddExperience";
import Alert from "./Components/UIElements/Alert";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <main>
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/get-started" exact component={Starting} />
            <Route path="/trails" exact component={Trails} />
            <Route path="/camping" exact component={Camping} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/edit-profile" exact component={EditProfile} />
            <PrivateRoute
              path="/add-experience"
              exact
              component={AddExperience}
            />
            <PrivateRoute
              path="/create-profile"
              exact
              component={CreateProfile}
            />
            <Route path="/contact" exact>
              <p>Trailworm Contact Page</p>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
