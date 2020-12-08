import React from "react";
import styles from "./index.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import data from "../../data";
import Article from "./Features/Article/Article";
import ScrollTop from "./Features/ScrollTop/ScrollTop";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.mainWrapper}>
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <ScrollTop />

          <div className={styles.contentWrapper}>
            <Switch>
              <Route
                exact
                path="/LiveMathDoc"
                component={() => <Article content={data.liveMath} />}
              />
              <Route
                exact
                path="/LiveMathDoc/1"
                component={() => <Article content={data.liveMath} />}
              />
              <Route
                exact
                path="/LiveMathDoc/2"
                component={() => <Article content={data.openTask} />}
              />
              <Route
                exact
                path="/LiveMathDoc/3"
                component={() => <Article content={data.closeTask} />}
              />
              <Route
                exact
                path="/LiveMathDoc/4"
                component={() => <Article content={data.booleanTask} />}
              />
              <Route
                exact
                path="/LiveMathDoc/5"
                component={() => <Article content={data.checkTask} />}
              />
              <Route
                exact
                path="/LiveMathDoc/6"
                component={() => <Article content={data.mern} />}
              />
              <Route
                exact
                path="/LiveMathDoc/7"
                component={() => <Article content={data.reduxAxios} />}
              />
              <Route
                exact
                path="/LiveMathDoc/8"
                component={() => <Article content={data.authorization} />}
              />
              <Route
                exact
                path="/LiveMathDoc/9"
                component={() => <Article content={data.security} />}
              />
              <Route
                exact
                path="/LiveMathDoc/10"
                component={() => <Article content={data.rwd} />}
              />
              <Route
                exact
                path="/LiveMathDoc/11"
                component={() => <Article content={data.emailVerification} />}
              />
              <Route
                exact
                path="/LiveMathDoc/*"
                component={() => <Article content={data.liveMath} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
