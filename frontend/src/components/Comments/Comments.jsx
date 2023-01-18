import { useState } from "react";
import PropTypes from "prop-types";
import "./Style.scss";

export default function Comments({ content, date, author }) {
  const [isHidden, setIsHidden] = useState(false);
  const toggleClass = () => {
    setIsHidden(!isHidden);
  };

  const [upVote, setUpVote] = useState(0);
  const Up = () => {
    setUpVote(upVote + 1);
  };
  const [downVote, setDownVote] = useState(0);
  const Down = () => {
    setDownVote(downVote + 1);
  };

  return (
    <div className="fullComment">
      <div className="comment">
        <img className="cAvatar" src="" alt="avatar" />
        <p>{author}</p>
        <p>{date}</p>
        <p>{content}</p>
        <div className="Vote">
          <p>Vote for this comments! or Reply</p>
          <button type="button" className="Vote" onClick={Up}>
            💚
          </button>
          <span className="num"> {upVote}</span>
          <button type="button" className="Vote" onClick={Down}>
            💔
          </button>
          <span className="num"> {downVote}</span>
          <button type="button" className="replyBtn" onClick={toggleClass}>
            Reply
          </button>
        </div>
      </div>
      <div className={!isHidden ? "hidden" : "visible"}>
        <form className="replyForm">
          <textarea placeholder="Reply to comment" rows="4" />
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
  author: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};
