import "./style.scss";
import { MdTopic } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";
import { AiFillFileUnknown } from "react-icons/ai";
import PropTypes from "prop-types";

export default function NavBarSuggestForm({ isActive, setIsActive }) {
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
        id="thirdB"
        className={isActive === "voteD" ? "active" : "noActive"}
        onClick={() => setIsActive("voteD")}
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

NavBarSuggestForm.propTypes = {
  isActive: PropTypes.string.isRequired,
  setIsActive: PropTypes.string.isRequired,
};
