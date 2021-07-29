import React from "react";
import FileUpload from "@/custom_components/FileUpload/FileUpload";

const FileForm = ({ handleFileChange: setFile }) => {
  const progressRef = React.useRef();

  const handleChange = (file) => {
    const bar = progressRef.current;
    // bar.removeAttribute("hidden");
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="uk-form-stacked uk-padding-small ">
      <FileUpload
        text="Add a PDF by dropping one here"
        accept=".pdf"
        multiple={false}
        handleChange={handleChange}
      />
      <progress
        className="uk-progress"
        value="0"
        max="100"
        hidden={1}
        ref={progressRef}
      ></progress>
    </div>
  );
};

export default FileForm;
