import { IoIosAddCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import "./style.scss";

export default function SuggestCard({ data }) {
  return (
    <article className="cardz">
      <h2>{data.title}</h2>
      <div className="wrapper">
        <div className="progressBar" />
      </div>
      <div className="footerCard">
        <p className="advice">Avis(5)</p>
        <button className="adviceButton" type="button">
          <IoIosAddCircleOutline />
        </button>
      </div>
    </article>
  );
}

SuggestCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
