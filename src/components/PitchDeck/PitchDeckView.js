import React from "react";
import { BASE_URL } from "./constants";

const PitchDeckView = ({
  title,
  description,
  imageUrl = [],
  fileUrl,
  company,
}) => {
  return (
    <section>
      <div className="uk-text-lead uk-text-uppercase">{company}</div>

      <div className="uk-text-default uk-text-large">{description}</div>
      <div
        className="uk-grid uk-child-width-1-1 uk-margin-small uk-grid-column-small uk-grid-row-small"
        uk-grid={1}
      >
        {imageUrl.map((val) => (
          <div>
            <img src={`${BASE_URL}${val}`} className={"uk-width-1-1"} />
          </div>
        ))}
      </div>
      <div>
        <a href={fileUrl} download={title}>
          Download {title} pdf
        </a>
      </div>
    </section>
  );
};

export default PitchDeckView;
