import React from "react";
import classes from "./Layout.css";

const layout = ({ children }) => {
  return (
    <React.Fragment>
      <section
        className="uk-container-expand "
        uk-height-viewport="expand: true"
      >
        <main id="layout" className={classes.Content}>
          {children}
        </main>
      </section>
      <div
        style={{ padding: "2px" }}
        uk-scroll=""
        className={`
                     uk-background-danger uk-position-fixed
                     uk-border-pill uk-light
                     uk-flex uk-flex-middle
                     uk-box-shadow-small
                     uk-position-bottom-right
                     uk-position-small
                   `}
      >
        <a href="#" className="" uk-totop=""></a>
      </div>
    </React.Fragment>
  );
};

export default layout;
