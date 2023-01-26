import FinalDecision from "@components/FinalDecision/FinalDecision";
import Nav from "@components/Nav/Nav";
import NavBarSuggest from "@components/NavBarSuggest/NavBarSuggest";
import SuggestDetails from "@components/SuggestDetails/SuggestDetails";
import Timeline from "@components/Timeline/Timeline";
import Thread from "@pages/Thread/Thread";
import Vote from "@components/Vote/Vote";
import { useState } from "react";
import "./style.scss";

export default function Suggest() {
  const [isActive, setIsActive] = useState("idea");
  return (
    <div>
      <Nav />
      <div className="timelineBar">
        <Timeline />
      </div>

      <div className="navBarSg">
        <NavBarSuggest isActive={isActive} setIsActive={setIsActive} />
      </div>

      <div className="detailsSg">
        {isActive === "idea" ? <SuggestDetails /> : ""}
        {isActive === "contrib" ? <Thread /> : ""}
        {isActive === "voteD" ? <Vote /> : ""}
        {isActive === "finaleD" ? <FinalDecision /> : ""}
      </div>
    </div>
  );
}
