import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

export default function SuggestCard({ data }) {
  return (
    <Link to={`/suggestionDetails/${data.id}`} className="suggestBlock">
      <article className="cardz">
        <h2 className="titleCard">{data.title} </h2>
        <div className="wrapper">
          <div className="progressBar" />
        </div>
        <div className="footerCard">
          <p className="opinion">Opinions(5)</p>
        </div>
      </article>
    </Link>
  );
}

SuggestCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
