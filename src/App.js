import React from "react";
import Teacher from "./components/Teacher/index.js";
import Student from "./components/Student/index.js";
import styles from "./App.module.scss";

const App = () => {
  const myRef = React.createRef();

  const scrollEvent = e => {
    console.log(myRef.current.scrollTop);
    console.log(myRef.current.clientHeight);
  };

  return (
    <div className={styles.root}>
      <div className={styles.student}>
        <div className={styles.title}>
          <h1>Widok ucznia</h1>
        </div>
        <div className={styles.app}>
          <Student />
        </div>
      </div>
      <div className={styles.teacher}>
        <div className={styles.title}>
          <h1>Panel nauczyciela</h1>
        </div>
        <div ref={myRef} onScroll={e => scrollEvent(e)} className={styles.app}>
          <Teacher />
        </div>
      </div>
    </div>
  );
};

export default App;
