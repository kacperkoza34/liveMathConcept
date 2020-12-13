import React from "react";
import styles from "./index.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import data from "../../data";
import Article from "./Features/Article/Article";
import ScrollTop from "./Features/ScrollTop/ScrollTop";
import Task from "../GlobalFeatures/Task/Task";

function App() {
  Object.keys(data).map(item => console.log(item));
  return (
    <div className={styles.App}>
      <div className={styles.mainWrapper}>
        <Router basename={process.env.PUBLIC_URL}>
          <Nav />
          <div className={styles.contentWrapper}>
            <Switch>
              {Object.keys(data).map((item, i) => (
                <Route
                  exact
                  path={`/LiveMathDoc/${item}`}
                  component={() => <Article content={data[item]} />}
                />
              ))}

              <Route
                exact
                path="/LiveMathDoc/*"
                component={() => <Article content={data.article1} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
