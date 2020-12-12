import React, { useEffect } from "react";
import Task from "../../../GlobalFeatures/Task/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BeatLoader from "react-spinners/BeatLoader";
import { connect } from "react-redux";
import styles from "./StudentsList.module.scss";

const students = [
  { name: "Blanka ", surname: "Wysocka" },
  { name: "Daria", surname: "Nowak" },
  { name: "Roksana", surname: "Rutkowska" },
  { name: "Patrycja", surname: "Górska" },
  { name: "Mirosława", surname: "Głowacka" },
  { name: "Celina", surname: "Krupa" },
  { name: "Gabriela", surname: "Włodarczyk" },
  { name: "Andżelika", surname: "Laskowska" },
  { name: "Marta", surname: "Wiśniewska" },
  { name: "Honorata", surname: "Bąk" },
  { name: "Anita", surname: "Czerwińska" },
  { name: "Ania", surname: "Kowalska" },
  { name: "Krystian", surname: "Duda" },
  { name: "Marcin", surname: "Górecki" },
  { name: "Ksawery", surname: "Kalinowski" },
  { name: "Adrian", surname: "Szczepański" },
  { name: "Bolesław", surname: "Baran" },
  { name: "Maurycy", surname: "Górecki" },
  { name: "Grzegorz", surname: "Mazurek" },
  { name: "Kazimierz", surname: "Sikora" },
  { name: "Natan", surname: "Kwiatkowski" },
  { name: "Krystian", surname: "Andrzejewski" },
  { name: "Michał", surname: "Szymczak" }
];

const StudentsList = ({ currentTask, exitActions, done }) => {
  const sortBySurname = (a, b) => {
    if (a.surname < b.surname) {
      return -1;
    }
    if (a.surname > b.surname) {
      return 1;
    }
    return 0;
  };

  const condition = (name, surname) => {
    if (name === "Ania" && surname === "Kowalska") return true;
    else return false;
  };

  return (
    <div className={styles.root}>
      <Task
        actionsAvailable={false}
        fontSize={24}
        content={currentTask}
        exitActions={true}
      />

      <ul>
        {students.sort(sortBySurname).map(({ name, surname }, i) => (
          <li
            className={done && condition(name, surname) ? styles.active : null}
          >
            {`${i + 1}. ${name} ${surname}`}
            <span>
              {done && condition(name, surname) ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  done: state.state.currentTask.resolved
});

export default connect(mapStateToProps)(StudentsList);
