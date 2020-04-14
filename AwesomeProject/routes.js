import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./home";
import Signup from "./signup";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="signup" component={Signup} title="Signup" />
    </Scene>
  </Router>
);
export default Routes;
