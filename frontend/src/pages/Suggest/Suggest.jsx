import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FinalDecision from "@components/FinalDecision/FinalDecision";
import Nav from "@components/Nav/Nav";
import NavBarSuggest from "@components/NavBarSuggest/NavBarSuggest";
import SuggestDetails from "@components/SuggestDetails/SuggestDetails";
import Timeline from "@components/Timeline/Timeline";
import Thread from "@pages/Thread/Thread";
import Vote from "@components/Vote/Vote";
import "./style.scss";

export default function Suggest() {
  const [isActive, setIsActive] = useState("idea");
  const [isVisible, setIsVisible] = useState(false);
  const [suggest, setSuggest] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/suggests/${id}`)
      .then(({ data }) => {
        setSuggest(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <Nav />
      <header id="headerSuggestionMain">
        <h2 className="titlesuggest">{suggest.title}</h2>
      </header>
      <div className="timelineBar">
        <Timeline suggestData={suggest} setIsVisible={setIsVisible} />
      </div>

      <div className="navBarSg">
        <NavBarSuggest isActive={isActive} setIsActive={setIsActive} />
      </div>

      <div className="detailsSg">
        {isActive === "idea" ? <SuggestDetails suggestData={suggest} /> : ""}
        {isActive === "contrib" && isVisible === true ? <Thread /> : ""}
        {isActive === "voteD" && isVisible === true ? <Vote /> : ""}
        {isActive === "finaleD" && isVisible === true ? <FinalDecision /> : ""}
      </div>
    </div>
  );
}
