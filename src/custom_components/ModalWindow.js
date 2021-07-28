import React from "react";
import ReactDOM from "react-dom";

const ModalWindow = ({
  children,
  style = {},
  className = "",
  zIndex = 1,
  hidden,
  overflow = true,
}) => {
  const autoOverflow = overflow ? { "uk-overflow-auto": 1 } : {};

  const element = (
    <React.Fragment>
      <div
        className="uk-flex-top uk-flex uk-open"
        uk-modal="stack: true"
        style={zIndex ? { zIndex } : {}}
        hidden={hidden}>
        <div
          className={[className, "uk-modal-dialog uk-text-center"].join(" ")}
          style={style}
          {...autoOverflow}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );

  return ReactDOM.createPortal(element, document.body);
};

export default ModalWindow;
