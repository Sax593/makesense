import { useState } from "react";
import "./style.scss";

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
        L'idée
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="secondB"
        className={isActive === "contrib" ? "active" : "noActive"}
        onClick={() => setIsActive("contrib")}
      >
        Contributions
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="thirdB"
        className={isActive === "votes" ? "active" : "noActive"}
        onClick={() => setIsActive("votes")}
      >
        Votes
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="fourthB"
        className={isActive === "finaleD" ? "active" : "noActive"}
        onClick={() => setIsActive("finaleD")}
      >
        Décision Finale
      </button>
    </div>
  );
}
