import Comments from "@components/Comments/Comments";
import axios from "axios";
import { useEffect, useState } from "react";

import "./Style.scss";

export default function Thread() {
  const [isHidden, setIsHidden] = useState(false);
  const toggleClass = () => {
    setIsHidden(!isHidden);
  };
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

  const [hChangeData, setHChangeData] = useState({
    content: "",
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
  return (
    <div className="thread">
      {tComments.length !== 0 ? (
        tComments.map((element) => {
          return (
            <Comments
              key={element.id}
              date={element.date}
              content={element.content}
              author={element.users_id}
              up={element.up_vote}
              down={element.down_vote}
            />
          );
        })
      ) : (
        <>
          <button type="button" className="tButton" onClick={toggleClass}>
            +
          </button>
          <div className={!isHidden ? "hidden" : "visible"}>
            <form className="replyForm">
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
