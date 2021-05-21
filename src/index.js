import React from "react";
import ReactDOM from "react-dom"; // eslint-disable-next-line
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from "./components/siteHeader";
import LoadTesterConfigPage from "./components/pages/loadTesterConfigPage";
import LoadTesterActionPage from "./components/pages/loadTesterActionPage";

// In general, the top component in an app's component hierarchy is primarily concerned with routing
const App = () => {
  // The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.
  // The App component composes the MoviesContextProvider with 'the rest of our components'. This means all components can now access the values contained in the context associated with the MoviesContextProvider component

  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> {/* New Header  */}
        <div className="container">
          <Switch>
            <Route path="/action" component={LoadTesterActionPage} />
            <Route path="/" component={LoadTesterConfigPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
