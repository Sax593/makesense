import FinalContent from "@components/FinalContent/FinalContent";
import Nav from "@components/Nav/Nav";
import ResultVote from "@components/ResultVote/ResultVote";

import "./style.scss";

export default function FinalDecision() {
  return (
    <>
      <Nav />
      <section className="result">
        <ResultVote />
        <FinalContent />
      </section>
    </>
  );
}
