import Nav from "@components/Nav/Nav";
import NavBarSuggestForm from "@components/NavBarSuggestForm/NavBarSuggestForm";
import SuggestIdeaDetail from "@components/SuggestIdeaDetail/SuggestIdeaDetail";
import TimelineForm from "@components/TimelineForm/TimelineForm";
import { useState } from "react";
import "./style.scss";

export default function SuggestForm() {
  const [isActive, setIsActive] = useState("idea");
  return (
    <section className="form_idea">
      <Nav />
      <header className="headerSuggestF">
        <p className="suggFormTitle">Suggestion Form</p>
      </header>
      <div className="timelineBarForm">
        <TimelineForm />
      </div>
      <div className="navBarSgForm">
        <NavBarSuggestForm isActive={isActive} setIsActive={setIsActive} />
      </div>

      <div className="detailsSg">
        {isActive === "idea" ? <SuggestIdeaDetail /> : ""}
      </div>
    </section>
  );
}
