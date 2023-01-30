import "./style.scss";
import propTypes from "prop-types";
import line from "../../assets/line.svg";

export default function FinalContent({ suggest }) {
  return (
    <div className="colfinal">
      <h2 className="styletitlefinal">{suggest.title}</h2>
      <article className="finalcontent">
        <label htmlFor="desc">
          <p className="pstylefinalvote">{suggest.finale_decision}</p>
        </label>
      </article>
      <img className="linefinal" src={line} alt="line" />
    </div>
  );
}

FinalContent.propTypes = {
  suggest: propTypes.shape({
    title: propTypes.string.isRequired,
    finale_decision: propTypes.string.isRequired,
  }).isRequired,
};
