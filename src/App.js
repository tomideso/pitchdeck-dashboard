import React, { Suspense } from "react";

import Layout from "./components/Layout/Layout";
import { Route, Switch, withRouter } from "react-router-dom";

const PitchDeckList = React.lazy(() => import("./components/PitchDeck/List"));
const NewPitchDeck = React.lazy(() =>
  import("./components/PitchDeck/NewPitchDeck")
);
const PitchDeck = React.lazy(() => import("./components/PitchDeck/PitchDeck"));

const App = (props) => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={PitchDeckList} />
          <Route path="/add" component={NewPitchDeck} />
          <Route path="/:id" component={PitchDeck} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default withRouter(App);
