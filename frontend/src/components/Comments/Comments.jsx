import { useState } from "react";
import PropTypes from "prop-types";
import "./Style.scss";
// eslint-disable-next-line import/no-unresolved
import { DateTime } from "luxon";
import axios from "axios";

export default function Comments({
  content,
  date,
  author,
  up,
  down,
  id,
  suggest,
}) {
  const format = "dd/MM/yy HH:mm";
  const [isHidden, setIsHidden] = useState(false);
  const toggleClass = () => {
    setIsHidden(!isHidden);
  };

  const [upVote, setUpVote] = useState(up);
  const Up = (evt) => {
    setUpVote(upVote + 1);
    evt.preventDefault();
    const newCom = {
      content,
      date: date.slice(0, 19),
      users_id: author,
      up_vote: upVote + 1,
      down_vote: down,
      id,
      suggests_id: suggest,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/comments/${id}`, newCom)
      .catch((err) => {
        console.error(err);
      });
  };
  const [downVote, setDownVote] = useState(down);
  const Down = (evt) => {
    setDownVote(downVote + 1);
    evt.preventDefault();
    const newCom1 = {
      content,
      date: date.slice(0, 19),
      users_id: author,
      up_vote: upVote,
      down_vote: downVote + 1,
      id,
      suggests_id: suggest,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/comments/${id}`, newCom1)
      .catch((err) => {
        console.error(err);
      });
  };

  const [replyData, setReplyData] = useState({
    content: "",
    users_id: 20,
    suggests_id: suggest,
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
    setReplyData({ ...replyData, [name]: newValue });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`, replyData)
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="fullComment">
      <div className="comment">
        <img className="cAvatar" src="" alt="avatar" />
        <p className="cAuthor">{author}</p>
        <p className="cDate">
          {date && DateTime.fromISO(date).toFormat(format)}
        </p>
        <p className="cContent">{content}</p>
        <div className="Vote">
          <p>Vote for this comments! or Reply</p>
          <button type="button" className="Vote" onClick={Up}>
            💚
          </button>
          <span className="num">{up}</span>
          <button type="button" className="Vote" onClick={Down}>
            💔
          </button>
          <span className="num">{down}</span>
          <button type="button" className="replyBtn" onClick={toggleClass}>
            Reply
          </button>
        </div>
      </div>
      <div className={!isHidden ? "hidden" : "visible"}>
        <form className="replyForm" onSubmit={hSubmit}>
          <textarea
            name="content"
            placeholder="Reply to comment"
            rows="4"
            onChange={hChange}
            value={replyData.content}
          />

          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={toggleClass}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
Comments.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  up: PropTypes.number.isRequired,
  down: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  suggest: PropTypes.number.isRequired,
};
