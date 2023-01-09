import { useState } from "react";
import "./Style.scss";

export default function Comments() {
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
        <p>Name</p>
        <p>
          Je suis un commentaire et je m'agrandis Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aliquam, optio! Quos atque dolorem
          adipisci quae, voluptate deleniti eum quibusdam vel iusto enim nulla
          et modi, neque exercitationem sint molestias voluptas. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Sed esse, at beatae
          veritatis nam laboriosam delectus, dolores quia eos repudiandae
          commodi natus, cumque obcaecati ratione pariatur nesciunt doloribus
          tenetur assumenda.
        </p>
        <div className="Vote">
          <p>Vote for this comments! or Reply</p>
          <button type="button" className="Vote" onClick={Up}>
            💚
          </button>
          <span className="num"> {upVote}</span>
          <button type="button" className="Vote" on onClick={Down}>
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
