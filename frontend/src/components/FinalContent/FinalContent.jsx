import axios from "axios";
import { useEffect, useState } from "react";
import "./style.scss";

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
    <article className="finalcontent">
      <h2>{content.title}</h2>
      <label htmlFor="desc">
        <p>{content.finale_decision}</p>
      </label>
    </article>
  );
}
