import useFetch from "@/hoc/useFetch";
import React from "react";
import { withRouter } from "react-router-dom";
import { PITCHDECK } from "./constants";
import PitchDeckView from "./PitchDeckView";

const PitchDeck = ({ match }) => {
  const id = match.params.id;

  const { data, status } = useFetch({ url: `${PITCHDECK}/${id}`, type: {} });

  return status == "complete" ? (
    <PitchDeckView {...data} />
  ) : status == "error" ? (
    <div>Error Fetching data</div>
  ) : (
    <div>Loading</div>
  );
};

export default withRouter(PitchDeck);
