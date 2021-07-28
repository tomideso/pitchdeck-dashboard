import React from "react";
import FileUpload from "@/custom_components/FileUpload/FileUpload";
import { ImageShack } from "../../constants/ImageShack";

const FileForm = ({ setFileUrl }) => {
  const progressRef = React.useRef();

  const handleChange = (file) => {
    const bar = progressRef.current;
    bar.removeAttribute("hidden");
    if (file) {
      ImageShack(file)
        .onProgress(({ loaded, total }) => {
          bar.max = total;
          bar.value = loaded;
        })
        .onCompleted(({ image_link: fileUrl, msg, error }) => {
          bar.setAttribute("hidden", 1);

          if (error) {
            // setloading(false);
            // return setError(msg);
          } else {
            setFileUrl(fileUrl);
          }
        });
    }
  };

  return (
    <div>
      <form className="uk-form-stacked uk-padding-small ">
        <div>
          <FileUpload
            text="Add a file by dropping one here"
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
      </form>
    </div>
  );
};

export default FileForm;
