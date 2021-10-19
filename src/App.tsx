import React from "react";
import { Router, Link, Switch, Route } from "react-router-dom";

import AuthProvider from "auth/AuthProvider";
import PrivateRoute from "auth/PrivateRoute";
import Home from "./pages/Home";
import PageTest_1 from "./pages/PageTest_1";
import PageTest_2 from "./pages/PageTest_2";
import PageTest_3 from "./pages/PageTest_3";
import PageTest_4 from "./pages/PageTest_4";
import PageTest_5 from "./pages/PageTest_5";
import PageTest_6 from "./pages/PageTest_6";
import PageTest_7 from "./pages/PageTest_7";
import PageTest_8 from "./pages/PageTest_8";

import history from "./history/history";

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/test" exact component={PageTest_1} />
          <PrivateRoute path="/test2" exact component={PageTest_2} />
          <PrivateRoute path="/test3" exact component={PageTest_3} />
          <PrivateRoute path="/test4" exact component={PageTest_4} />
          <PrivateRoute path="/test5" exact component={PageTest_5} />
          <PrivateRoute path="/test6" exact component={PageTest_6} />
          <PrivateRoute path="/test7" exact component={PageTest_7} />
          <PrivateRoute path="/test8" exact component={PageTest_8} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
