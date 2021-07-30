import useFetch from "@/hoc/useFetch";
import React from "react";
import { Link } from "react-router-dom";
import { PITCHDECK } from "./constants";

const List = () => {
  const { data, status } = useFetch({ url: PITCHDECK });

  const render =
    status == "complete" ? (
      <div>
        {data.length ? (
          <dl class="uk-description-list uk-description-list-divider">
            {data.map(({ _id, title, description, company }) => (
              <React.Fragment key={_id}>
                <dt>
                  <Link to={"/" + _id}>
                    <strong>{company}: </strong>
                    {title}
                  </Link>
                </dt>
                <dd>{description}</dd>
              </React.Fragment>
            ))}
          </dl>
        ) : (
          <div>No Pitch added yet</div>
        )}
      </div>
    ) : status == "error" ? (
      <div>Error Fetching data</div>
    ) : (
      <div>Loading</div>
    );

  return (
    <>
      <div>
        <span className="uk-text-lead">Pitch List</span>
        {"  "}
        <Link
          to="/add"
          className="uk-button uk-button-small uk-button-default uk-text-primary"
        >
          Add new
        </Link>
        {render}
      </div>
    </>
  );
};

export default List;
