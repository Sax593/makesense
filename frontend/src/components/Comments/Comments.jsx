import { useState } from "react";
import PropTypes from "prop-types";
import "./Style.scss";
import { DateTime } from "luxon";
import axios from "axios";

export default function Comments({ content, date, author, up, down }) {
  const format = "dd/MM/yy HH:mm";
  const [isHidden, setIsHidden] = useState(false);
  const toggleClass = () => {
    setIsHidden(!isHidden);
  };

  const [upVote, setUpVote] = useState();
  const Up = () => {
    setUpVote(upVote + 1);
  };
  const [downVote, setDownVote] = useState();
  const Down = () => {
    setDownVote(downVote + 1);
  };

  const [replyData, setReplyData] = useState({
    content: "",
    users_id: 20,
    suggests_id: 13,
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
    axios.post("http://localhost:5000/comments", replyData).catch((err) => {
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
        <form className="replyForm">
          <textarea
            name="content"
            placeholder="Reply to comment"
            rows="4"
            onChange={hChange}
            value={replyData.content}
          />

          <div>
            <button type="submit" onSubmit={hSubmit}>
              Submit
            </button>
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
};
