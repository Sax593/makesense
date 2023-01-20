import { IoIosAddCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

export default function SuggestCard({ data }) {
  return (
    <article className="cardz">
      <h2>{data.title}</h2>
      <div className="wrapper">
        <div className="progressBar" />
      </div>
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
  }).isRequired,
};
