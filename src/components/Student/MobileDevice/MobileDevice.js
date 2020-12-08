import React from "react";
import { ReactComponent as Phone } from "./phone.svg";
import styles from "./MobileDevice.module.scss";

const MobileDevice = ({ children }) => {
  return (
    <div className={styles.root}>
      <Phone />
      <div className={styles.app}>{children}</div>
    </div>
  );
};

export default MobileDevice;
