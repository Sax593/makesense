import FinalContent from "@components/FinalContent/FinalContent";
import ResultVote from "@components/ResultVote/ResultVote";

import "./style.scss";

export default function FinalDecision() {
  return (
    <section className="result">
      <ResultVote />
      <FinalContent />
    </section>
  );
}
