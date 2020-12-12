import React, { useState, useEffect, useRef } from "react";
import styles from "./Article.module.scss";
import Photo from "../Photo/Photo";
import CodeComponent from "../CodeComponent/CodeComponent";
import { connect } from "react-redux";
import { setArticleHeigth, setPosition } from "../../../../redux/actions";
import MathJax from "../../../GlobalFeatures/MathJax/MathJax";
import Task from "../../../GlobalFeatures/Task/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Article = ({ content, setArticleHeigth, setPosition }) => {
  const myRef = useRef(null);
  useEffect(() => {
    setArticleHeigth(myRef.current.clientHeight);
  }, [setArticleHeigth]);
  return (
    <div ref={myRef} className={styles.root}>
      {content.map(({ title, text, photo, subtitle, math, task }, i) => (
        <div key={i} className={styles.article}>
          <div onClick={() => setPosition(i)} className={styles.pointer}>
            <FontAwesomeIcon icon={faHandPointRight} />
          </div>
          {title && <h1>{title}</h1>}
          {subtitle && <h3>{subtitle}</h3>}
          {text && (
            <p>
              <MathJax content={text} font={18} />
            </p>
          )}
          {math && <MathJax content={"`" + math + "`"} font={18} />}
          {photo && <Photo photo={photo} i={i} content={content} />}
          {task && <Task account={"teacher"} content={task} />}
        </div>
      ))}
    </div>
  );
};

export default connect(null, { setArticleHeigth, setPosition })(Article);
