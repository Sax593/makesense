import FinalContent from "@components/FinalContent/FinalContent";
import ResultVote from "@components/ResultVote/ResultVote";
import propTypes from "prop-types";

import "./style.scss";

export default function FinalDecision({ suggestData }) {
  return (
    <section className="result">
      <ResultVote />
      <FinalContent suggest={suggestData} />
    </section>
  );
}

FinalDecision.propTypes = {
  suggestData: propTypes.string.isRequired,
};
