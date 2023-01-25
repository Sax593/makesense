import { IoIosAddCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import ProgressBar from "@components/ProgressBar/ProgressBar";

export default function SuggestCard({ data }) {
  return (
    <article className="card">
      <h2>{data.title}</h2>
      <ProgressBar priority={data.priority} />
      <div className="footerCard">
        <p className="advice">Avis(5)</p>
        <Link to={`/suggestionDetails/${data.id}`}>
          <button className="adviceButton" type="button">
            <IoIosAddCircleOutline />
          </button>
        </Link>
      </div>
    </article>
  );
}

SuggestCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
  }).isRequired,
};
