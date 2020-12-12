import React from "react";
import Teacher from "./components/Teacher/index.js";
import Student from "./components/Student/index.js";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.student}>
        <div className={styles.title}>
          <h1>Ania Kowalska</h1>
        </div>
        <div className={styles.app}>
          <Student />
        </div>
      </div>
      <div className={styles.teacher}>
        <div className={styles.title}>
          <h1>Panel nauczyciela</h1>
        </div>
        <div className={styles.app}>
          <Teacher />
        </div>
      </div>
    </div>
  );
};

export default App;
