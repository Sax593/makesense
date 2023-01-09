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
        <h3 className="text">L'idée</h3>
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="secondB"
        className={isActive === "contrib" ? "active" : "noActive"}
        onClick={() => setIsActive("contrib")}
      >
        <h3 className="text">Contributions</h3>
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="thirdB"
        className={isActive === "votes" ? "active" : "noActive"}
        onClick={() => setIsActive("votes")}
      >
        <h3 className="text">Votes</h3>
      </button>
      <div className="triangle" />

      <button
        type="button"
        id="fourthB"
        className={isActive === "finaleD" ? "active" : "noActive"}
        onClick={() => setIsActive("finaleD")}
      >
        <h3 className="text">Décision Finale</h3>
      </button>
    </div>
  );
}
