import FinalContent from "@components/FinalContent/FinalContent";
import ResultVote from "@components/ResultVote/ResultVote";
import propTypes from "prop-types";
import line from "../../assets/line.svg";

import "./style.scss";

export default function FinalDecision({ suggestData }) {
  return (
    <>
      <section className="result">
        <ResultVote />
        <FinalContent suggest={suggestData} />
      </section>
      <img className="linefinal" src={line} alt="line" />
    </>
  );
}

FinalDecision.propTypes = {
  suggestData: propTypes.string.isRequired,
};
