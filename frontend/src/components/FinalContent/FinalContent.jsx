import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";
import line from "../../assets/line.svg";

export default function FinalContent() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/suggests/6`)
      .then(({ data }) => {
        setContent(data);
      });
  }, []);
  return (
    <div className="colfinal">
      <h2 className="styletitlefinal">{content.title}</h2>
      <article className="finalcontent">
        <label htmlFor="desc">
          <p className="pstylefinalvote">{content.finale_decision}</p>
        </label>
      </article>
      <img className="linefinal" src={line} alt="line" />
    </div>
  );
}
