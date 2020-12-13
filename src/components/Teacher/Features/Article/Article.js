import React, { useState, useEffect, useRef } from "react";
import styles from "./Article.module.scss";
import Photo from "../Photo/Photo";
import StudentsList from "../StudentsList/StudentsList";
import { connect } from "react-redux";
import { setPosition } from "../../../../redux/actions";
import MathJax from "../../../GlobalFeatures/MathJax/MathJax";
import Task from "../../../GlobalFeatures/Task/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const Article = ({ content, setPosition, currentTask, position }) => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) myRef.current.scrollIntoView({ behavior: "smooth" });
  }, [currentTask]);
  console.log(content);
  return (
    <div>
      {Object.keys(currentTask).length > 0 ? (
        <>
          <div ref={myRef} />
          <StudentsList currentTask={currentTask} />
        </>
      ) : (
        <div className={styles.root}>
          {content.map(
            ({ title, text, photo, subtitle, math, task, frame }, i) => (
              <div key={i} className={styles.article}>
                <div onClick={() => setPosition(i)} className={styles.pointer}>
                  <FontAwesomeIcon icon={faHandPointRight} />
                </div>
                {<div ref={i == position ? myRef : null} />}
                {title && <h1 style={{ marginTop: "30px" }}>{title}</h1>}
                {subtitle && <h3>{subtitle}</h3>}
                {text && (
                  <p>
                    <MathJax content={text} font={18} />
                  </p>
                )}
                {frame && (
                  <p className={styles.frame}>
                    <MathJax content={frame} font={18} />
                  </p>
                )}
                {math && <MathJax content={"`" + math + "`"} font={18} />}
                {photo && <Photo src={photo} i={i} content={content} />}
                {task && (
                  <Task actionsAvailable={true} fontSize={18} content={task} />
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentTask: state.state.currentTask,
  position: state.state.position
});

export default connect(mapStateToProps, { setPosition })(Article);
