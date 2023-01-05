import { useState } from "react";
import "./style.scss";

export default function NavBarSuggest() {
  const [isActive, setIsActive] = useState("idea");

  return (
    <div className="navBarS">
      <button
        type="button"
        className="firstB"
        style={{
          backgroundColor: isActive === "idea" ? "#70af90" : "#70af8f60",
          boxShadow: isActive === "idea" ? "0 20px 60px 0 black" : "unset",
          cursor: "pointer",
        }}
        onClick={() => setIsActive("idea")}
      >
        L'idée
      </button>

      <button
        type="button"
        className="secondB"
        style={{
          backgroundColor: isActive === "contrib" ? "#70af90" : "#70af8f60",
          boxShadow: isActive === "contrib" ? "0 20px 60px 0 black" : "unset",
          cursor: "pointer",
        }}
        onClick={() => setIsActive("contrib")}
      >
        Contributions
      </button>

      <button
        type="button"
        className="thirdB"
        style={{
          backgroundColor: isActive === "votes" ? "#70af90" : "#70af8f60",
          boxShadow: isActive === "votes" ? "0 20px 60px 0 black" : "unset",
          cursor: "pointer",
        }}
        onClick={() => setIsActive("votes")}
      >
        Votes
      </button>

      <button
        type="button"
        className="fourthB"
        style={{
          backgroundColor: isActive === "finaleD" ? "#70af90" : "#70af8f60",
          boxShadow: isActive === "finaleD" ? "0 20px 60px 0 black" : "unset",
          cursor: "pointer",
        }}
        onClick={() => setIsActive("finaleD")}
      >
        Décision Finale
      </button>
    </div>
  );
}
