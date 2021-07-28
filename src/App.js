import React, { Suspense } from "react";

import Layout from "./components/Layout/Layout";
import {
  Route,
  Switch,
  withRouter,
  HashRouter,
  Redirect,
} from "react-router-dom";

const PitchDeckList = React.lazy(() => import("./components/PitchDeck/List"));
const NewPitchDeck = React.lazy(() =>
  import("./components/PitchDeck/NewPitchDeck")
);

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={PitchDeckList} />
          <Route path="/add" component={NewPitchDeck} />
        </Suspense>
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
