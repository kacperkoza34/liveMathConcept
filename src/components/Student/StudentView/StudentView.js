import React, { useEffect, useRef, useState } from "react";
import data from "../../../data";
import Photo from "../../Teacher/Features/Photo/Photo";
import { connect } from "react-redux";
import styles from "./StudentView.module.scss";
import MathJax from "../../GlobalFeatures/MathJax/MathJax";
import Task from "../../GlobalFeatures/Task/Task";

const StudentView = ({ page, position, articleHeigth }) => {
  const scrollToThisRef = useRef(null);
  const [refPosition, setRefPosition] = useState(0);

  useEffect(() => {
    if (scrollToThisRef.current)
      scrollToThisRef.current.scrollIntoView({ behavior: "smooth" });
  }, [position]);
  return (
    <div className={styles.root}>
      {Object.keys(data).map((key, i) => {
        return (
          i === page &&
          data[key].map(({ title, text, photo, subtitle, math, task }, i) => (
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
              {photo && <Photo photo={photo} i={i} content={data[key]} />}
              {task && <Task account={"student"} content={task} />}
            </div>
          ))
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  page: state.state.page,
  position: state.state.position,
  articleHeigth: state.state.articleHeigth
});
export default connect(mapStateToProps)(StudentView);
