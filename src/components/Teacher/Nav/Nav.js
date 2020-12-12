import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { setPage } from "../../../redux/actions";

const navLinks = [
  { title: "LiveMath", link: "/LiveMathDoc/1" },
  { title: "Zadania otwarte", link: "/LiveMathDoc/2" },
  { title: "Zadanie zamknięte", link: "/LiveMathDoc/3" },
  { title: "Zadanie prawda/fałsz", link: "/LiveMathDoc/4" },
  { title: "Sprawdzanie zadań", link: "/LiveMathDoc/5" },
  { title: " Tech Stack", link: "/LiveMathDoc/6" },
  { title: " Redux-Axios", link: "/LiveMathDoc/7" },
  { title: " Authorization", link: "/LiveMathDoc/8" },
  { title: " Security", link: "/LiveMathDoc/9" },
  { title: " RWD", link: "/LiveMathDoc/10" },
  { title: " Email verification", link: "/LiveMathDoc/11" }
];

const Nav = ({ setPage, isTaskOpen }) => {
  return (
    <nav>
      {navLinks.map(({ title, link, dev }, i) => (
        <NavLink
          key={link}
          className={styles.navLinks}
          activeStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
          to={process.env.PUBLIC_URL + link}
          onClick={() => setPage(i)}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
const mapStateToProps = state => ({
  isTaskOpen: Object.keys(state.state.currentTask).length > 0 ? true : false
});

export default connect(null, { setPage })(Nav);
