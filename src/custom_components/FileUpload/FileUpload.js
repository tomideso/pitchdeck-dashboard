import React from "react";
import useDragNDrop from "../../hoc/useDragNDrop";

const FileUpload = ({
  text,
  handleChange,
  name,
  multiple = false,
  ...props
}) => {
  const { inputRef, parentRef } = useDragNDrop();

  return (
    <React.Fragment>
      <div
        ref={parentRef}
        className="js-upload uk-placeholder uk-text-center uk-margin-remove-bottom">
        <span uk-icon="icon: cloud-upload"></span>
        <span className="uk-text-middle">
          {text || "Attach a new logo by dropping one here"} or{" "}
        </span>
        <div uk-form-custom={1}>
          <input
            ref={inputRef}
            multiple={multiple}
            type="file"
            name={name || "file"}
            {...props}
            onClick={(evt) => {
              inputRef.current.value = "";
            }}
            onChange={(evt) => {
              [].slice.call(evt.target.files).forEach((val) => {
                handleChange && handleChange(val);
              });
            }}
          />
          <span className="uk-link"></span>
          <span className="uk-link"> selecting one</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
