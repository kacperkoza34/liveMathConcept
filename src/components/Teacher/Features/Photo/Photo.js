import React, { useState, useEffect } from "react";
import styles from "./Photo.module.scss";

const Photo = ({ src, width }) => {
  return (
    <div style={{ width: `${width}px` }} className={styles.photo}>
      <img src={src} alt="ups" />
    </div>
  );
};

export default Photo;
