import React, { useState, useEffect } from "react";
import styles from "./Article.module.scss";
import Photo from "../Photo/Photo";
import CodeComponent from "../CodeComponent/CodeComponent";

const Article = ({ content }) => {
  return (
    <div className={styles.root}>
      {content.map(({ title, text, photo, subtitle, code, link }, i) => (
        <div key={i} className={styles.article}>
          {title && <h1>{title}</h1>}
          {subtitle && <h3>{subtitle}</h3>}
          {text && <p>{text}</p>}
          {link && (
            <a href={link.src} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          )}

          {photo && <Photo photo={photo} i={i} content={content} />}
        </div>
      ))}
    </div>
  );
};

export default Article;
