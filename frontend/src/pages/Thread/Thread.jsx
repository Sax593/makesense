import Comments from "@components/Comments/Comments";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Style.scss";

export default function Thread() {
  const [isHidden, setIsHidden] = useState(false);
  const toggleClass = () => {
    setIsHidden(!isHidden);
  };
  const { id } = useParams();
  const [tComments, setTcomments] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/comments`)
      .then(({ data }) => {
        setTcomments(
          data.filter((comm) => {
            return comm.suggests_id === Number(id);
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const [hChangeData, setHChangeData] = useState({
    content: "",
    users_id: 20,
    suggests_id: id,
  });
  const hChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    let newValue = null;
    switch (type) {
      case "checkbox":
        newValue = checked;
        break;
      case "file":
        return;
      default:
        newValue = value;
    }
    setHChangeData({ ...hChangeData, [name]: newValue });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`, hChangeData)
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="thread">
      {tComments.length !== 0 ? (
        tComments.map((element) => {
          return (
            <Comments
              key={element.id}
              id={element.id}
              date={element.date}
              content={element.content}
              author={element.users_id}
              up={element.up_vote}
              down={element.down_vote}
              suggest={element.suggests_id}
            />
          );
        })
      ) : (
        <>
          <button type="button" className="tButton" onClick={toggleClass}>
            +
          </button>
          <div className={!isHidden ? "hidden" : "visible"}>
            <form className="replyForm" onSubmit={hSubmit}>
              <textarea
                name="content"
                placeholder="Reply to comment"
                rows="4"
                onChange={hChange}
                value={hChangeData.content}
              />

              <div>
                <button type="submit" className="replyBtn">
                  Submit
                </button>
                <button
                  type="button"
                  className="replyBtn"
                  onClick={toggleClass}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
