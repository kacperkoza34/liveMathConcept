import React from "react";
import MathJax from "../MathJax/MathJax";
import styles from "./Task.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

const Task = ({ account, content }) => {
  const [actions, toggleActions] = React.useState(false);
  const { text, subTasks } = content;
  return (
    <div>
      {account === "student" ? (
        <div className={styles.student}>
          <div>
            <div className={styles.text}>
              <MathJax content={content.text} font={14} />
            </div>
          </div>
          {subTasks.length > 0 &&
            subTasks.map(item => <MathJax content={item} font={14} />)}
        </div>
      ) : (
        <div className={styles.teacher}>
          <div className={styles.text}>
            <MathJax content={content.text} font={18} />
            <div
              onClick={() => toggleActions(state => !state)}
              className={styles.icon}
            >
              <FontAwesomeIcon icon={actions ? faTimes : faPen} />
            </div>
          </div>
          {subTasks.length > 0 &&
            subTasks.map(item => <MathJax content={item} font={18} />)}
          {actions && (
            <div className={styles.actions}>
              <button>Zadaj teraz</button>
              <button>Zadaj do domu</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
