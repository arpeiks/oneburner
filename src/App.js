import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Contact from "./contact";
import Landing2 from "./landing2";
import Enterprise from "./enterprise";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing2} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/enterprise" component={Enterprise} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
