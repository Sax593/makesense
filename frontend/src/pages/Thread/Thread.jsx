import Comments from "@components/Comments/Comments";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Style.scss";

export default function Thread() {
  const [tComments, setTcomments] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/comments`)
      .then(({ data }) => {
        setTcomments(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="thread">
      {tComments.map((element) => {
        return (
          <li key={element.id}>
            <Comments />
          </li>
        );
      })}
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
}
