import React, { useEffect } from "react";
import data from "../../../data";
import Photo from "../../Teacher/Features/Photo/Photo";
import { connect } from "react-redux";

const StudentView = ({ page }) => {
  return (
    <div>
      {Object.keys(data).map((key, i) => {
        return (
          i === page &&
          data[key].map(({ title, text, photo, subtitle, code, link }, i) => (
            <div key={i}>
              {title && <h1>{title}</h1>}
              {subtitle && <h3>{subtitle}</h3>}
              {text && <p>{text}</p>}
              {link && (
                <a href={link.src} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              )}

              {photo && <Photo photo={photo} i={i} content={data[key]} />}
            </div>
          ))
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  page: state.state.page
});
export default connect(mapStateToProps)(StudentView);
