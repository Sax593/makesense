import FinalContent from "@components/FinalContent/FinalContent";
import ResultVote from "@components/ResultVote/ResultVote";
import propTypes from "prop-types";
import line from "../../assets/line.svg";

import "./style.scss";

export default function FinalDecision({ suggestData }) {
  return (
    <>
      <section className="result">
        <ResultVote suggest={suggestData} />
        <FinalContent suggest={suggestData} />
      </section>
    </>
  );
}

FinalDecision.propTypes = {
  suggestData: propTypes.string.isRequired,
};
