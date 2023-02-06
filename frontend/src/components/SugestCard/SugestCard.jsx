import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import ProgressBar from "@components/ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SuggestCard({ suggestData }) {
  const [counter, setCounter] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/suggests/countcomments/${
          suggestData.id
        }`
      )
      .then(({ data }) => {
        setCounter(data);
      });
  }, []);
  return (
    <Link to={`/suggestionDetails/${suggestData.id}`} className="suggestBlock">
      <article className="card">
        <h2 className="titleCard">{suggestData.title}</h2>
        <ProgressBar priority={suggestData.priority} />
        <div className="footerCard">
          <p className="opinion">Opinions({counter.count})</p>
        </div>
      </article>
    </Link>
  );
}

SuggestCard.propTypes = {
  suggestData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
};
