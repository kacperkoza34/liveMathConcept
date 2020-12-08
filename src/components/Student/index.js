import React, { useState } from "react";
import MobileDevice from "./MobileDevice/MobileDevice";
import StudentView from "./StudentView/StudentView.js";
import MathJax from "react-mathjax-preview";

const App = () => {
  const [math, setMath] = useState("");
  return (
    <>
      <MobileDevice>
        <StudentView />
      </MobileDevice>
      <div style={{ margin: "100px" }}>
        <input onChange={e => setMath(String.raw`${e.target.value}`)} />
        <MathJax math={"`" + math + "`"} />
      </div>
    </>
  );
};

export default App;
