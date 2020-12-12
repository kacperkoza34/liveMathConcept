import React, { useEffect, useRef } from "react";
import data from "../../../data";
import Photo from "../../Teacher/Features/Photo/Photo";
import { connect } from "react-redux";
import styles from "./StudentView.module.scss";
import MathJax from "../../GlobalFeatures/MathJax/MathJax";
import Task from "../../GlobalFeatures/Task/Task";
import ResolveTask from "../ResolveTask/ResolveTask";

const StudentView = ({ page, position, currentTask }) => {
  const scrollToThisRef = useRef(null);

  useEffect(() => {
    if (scrollToThisRef.current)
      scrollToThisRef.current.scrollIntoView({ behavior: "smooth" });
  }, [position]);

  useEffect(() => {
    if (scrollToThisRef.current)
      scrollToThisRef.current.scrollIntoView({ behavior: "smooth" });
  }, [page]);

  return (
    <div className={styles.root}>
      {!Object.keys(currentTask).length > 0 ? (
        <div>
          {Object.keys(data).map((key, i) => {
            return (
              i === page &&
              data[key].map(
                ({ title, text, photo, subtitle, math, task }, i) => (
                  <div className={styles.component} key={i}>
                    <div ref={i == position ? scrollToThisRef : null}></div>
                    {title && <h1>{title}</h1>}
                    {subtitle && <h3>{subtitle}</h3>}
                    {text && (
                      <p>
                        <MathJax content={text} font={14} />
                      </p>
                    )}
                    {math && <MathJax content={"`" + math + "`"} font={14} />}
                    {photo && <Photo src={photo} i={i} content={data[key]} />}
                    {task && (
                      <Task
                        actionsAvailable={false}
                        fontSize={14}
                        content={task}
                      />
                    )}
                  </div>
                )
              )
            );
          })}
        </div>
      ) : (
        <ResolveTask task={currentTask} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  page: state.state.page,
  position: state.state.position,
  currentTask: state.state.currentTask
});
export default connect(mapStateToProps)(StudentView);
