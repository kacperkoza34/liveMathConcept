import React, { useState } from "react";
import Task from "../../GlobalFeatures/Task/Task.js";
import styles from "./ResolveTask.module.scss";
import { connect } from "react-redux";
import { markTaskAsResolved } from "../../../redux/actions";

const ResolveTask = ({ task, markTaskAsResolved }) => {
  const [photos, addPhoto] = useState([]);
  return (
    <div className={styles.root}>
      <Task actionsAvailable={false} fontSize={14} content={task} />
      {photos.map(item => (
        <div className={styles.photo}>
          <img src={item} alt="ups" />
        </div>
      ))}
      <button
        onClick={() =>
          addPhoto(state => [
            ...state,
            "https://i.postimg.cc/nLnBkzyK/task1.jpg"
          ])
        }
      >
        Dodaj zdjęcie{" "}
      </button>
      <div>
        {photos.length > 0 && (
          <button onClick={() => markTaskAsResolved()}>Gotowe</button>
        )}
      </div>
    </div>
  );
};

export default connect(null, { markTaskAsResolved })(ResolveTask);
