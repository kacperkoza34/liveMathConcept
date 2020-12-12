import React, { useEffect, useRef } from "react";
import MobileDevice from "./MobileDevice/MobileDevice";
import StudentView from "./StudentView/StudentView.js";

const App = () => {
  return (
    <MobileDevice>
      <StudentView />
    </MobileDevice>
  );
};

export default App;
