import React, { useState, useEffect } from "react";
import styles from "./Photo.module.scss";

const Photo = ({ photo, i, content }) => {
  const [fullView, setFullView] = useState(content.map(() => false));
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setMobile(true);
    else setMobile(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) setMobile(true);
      else setMobile(false);
    });
  }, []);

  return (
    <div className={styles.root}>
      {photo && (
        <>
          <div
            style={
              mobile
                ? { padding: 0 }
                : { padding: `0 ${photo.plusX}% 0 ${photo.minusX}%` }
            }
            className={styles.photo}
          >
            <img
              onClick={() =>
                photo.fullView &&
                !mobile &&
                setFullView(
                  fullView.map((item, index) => (index === i ? !item : item))
                )
              }
              style={mobile || !photo.fullView ? { cursor: "auto" } : {}}
              src={photo.src}
              alt={"ups"}
            />
          </div>
          {!mobile && photo.fullView ? (
            <>
              {" "}
              {fullView[i] && (
                <div className={styles.wrapper}>
                  <div className={styles.photoFullView}>
                    <img
                      onClick={() =>
                        setFullView(
                          fullView.map((item, index) =>
                            index === i ? !item : item
                          )
                        )
                      }
                      src={photo.src}
                      alt={"ups"}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Photo;
