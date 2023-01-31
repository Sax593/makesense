import propTypes from "prop-types";
import "./style.scss";

export default function FinalContent({ suggest }) {
  return (
    <section className="colfinal">
      <h2 className="styletitlefinal">{suggest.title}</h2>
      <article className="finalcontent">
        <label htmlFor="desc">
          <p className="pstylefinalvote">{suggest.finale_decision}</p>
        </label>
      </article>
    </section>
  );
}

FinalContent.propTypes = {
  suggest: propTypes.shape({
    title: propTypes.string.isRequired,
    finale_decision: propTypes.string.isRequired,
  }).isRequired,
};
