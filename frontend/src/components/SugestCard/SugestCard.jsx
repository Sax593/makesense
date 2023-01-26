import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import ProgressBar from "@components/ProgressBar/ProgressBar";

export default function SuggestCard({ data }) {
  return (
    <Link to={`/suggestionDetails/${data.id}`} className="suggestBlock">
      <article className="card">
        <h2 className="titleCard">{data.title}</h2>
        <ProgressBar priority={data.priority} />
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
    priority: PropTypes.string.isRequired,
  }).isRequired,
};
