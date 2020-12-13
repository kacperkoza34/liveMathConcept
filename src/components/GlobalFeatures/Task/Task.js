import React from "react";
import MathJax from "../MathJax/MathJax";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { setCurrentTask, clearCurrentTask } from "../../../redux/actions";
import { connect } from "react-redux";

const Task = ({
  actionsAvailable,
  content,
  setCurrentTask,
  clearCurrentTask,
  fontSize,
  exitActions
}) => {
  const [actions, toggleActions] = React.useState(false);
  const { text, subTasks } = content;
  return (
    <div style={{ lineHeight: `${content.lineMobile}px` }}>
      {!actionsAvailable ? (
        <div className={styles.student}>
          <div>
            <div className={styles.text}>
              <MathJax content={content.text} font={fontSize} />
            </div>
          </div>
          {subTasks.length > 0 &&
            subTasks.map(item => (
              <div className={styles.subTasks}>
                {" "}
                <MathJax content={item} font={fontSize} />
              </div>
            ))}
          {exitActions && (
            <div className={styles.actions}>
              <button onClick={() => clearCurrentTask()}>Zakończ</button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.teacher}>
          <div className={styles.text}>
            <MathJax content={content.text} font={fontSize} />
          </div>
          {subTasks.length > 0 &&
            subTasks.map(item => (
              <div className={styles.subTask}>
                <MathJax content={item} font={fontSize} />
              </div>
            ))}
          <div
            onClick={() => toggleActions(state => !state)}
            className={styles.icon}
          >
            <FontAwesomeIcon icon={actions ? faTimes : faPen} />
          </div>
          {actions && (
            <div className={styles.actions}>
              <button
                onClick={() =>
                  setCurrentTask({
                    text: content.text,
                    subTasks,
                    resolved: false
                  })
                }
              >
                Zadaj teraz
              </button>
              <button>Zadaj do domu</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default connect(null, { setCurrentTask, clearCurrentTask })(Task);
