import { useState } from "react";
import "./style.scss";
import { MdTopic } from "react-icons/md";
import { VscCommentDiscussion } from "react-icons/vsc";
import { FaVoteYea } from "react-icons/fa";
import { AiFillFileUnknown } from "react-icons/ai";

export default function NavBarSuggest() {
  const [isActive, setIsActive] = useState("idea");

  return (
    <div className="navBarS">
      <button
        type="button"
        id="firstB"
        className={isActive === "idea" ? "active" : "noActive"}
        onClick={() => setIsActive("idea")}
      >
        <h3 className="text">The Idea</h3>
        <div className="iconSuggest">
          <MdTopic />
        </div>
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="secondB"
        className={isActive === "contrib" ? "active" : "noActive"}
        onClick={() => setIsActive("contrib")}
      >
        <h3 className="text">Contributions</h3>
        <div className="iconSuggest">
          <VscCommentDiscussion />
        </div>
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="thirdB"
        className={isActive === "votes" ? "active" : "noActive"}
        onClick={() => setIsActive("votes")}
      >
        <h3 className="text">Votes</h3>
        <div className="iconSuggest">
          <FaVoteYea />
        </div>
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="fourthB"
        className={isActive === "finaleD" ? "active" : "noActive"}
        onClick={() => setIsActive("finaleD")}
      >
        <h3 className="text">Final Decision</h3>
        <div className="iconSuggest">
          <AiFillFileUnknown />
        </div>
      </button>
    </div>
  );
}
