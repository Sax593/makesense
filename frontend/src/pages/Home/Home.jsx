import { useEffect, useState } from "react";
import axios from "axios";
import SugestCard from "@components/SugestCard/SugestCard";
import Nav from "@components/Nav/Nav";
import "./Style.scss";

export default function Home() {
  const [suggest, setSuggest] = useState([]);
  const [priority, setPriority] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/suggests`)
      .then(({ data }) => {
        setSuggest(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <header id="headerSuggestion">
        <h2 className="titlesuggest">Suggestions</h2>
      </header>
      <section className="titlehome">
        <form className="filterBlock">
          <fieldset className="filteridea">
            <legend className="priorisation">Priorisation </legend>
            <div>
              <input
                className="checkboxP"
                type="radio"
                id="all"
                name="priority"
                onClick={() => setPriority()}
              />
              <label className="priorityLabel allP" htmlFor="all">
                All
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="radio"
                id="new"
                name="priority"
                onClick={() => setPriority(0)}
              />
              <label className="priorityLabel noneP" htmlFor="new">
                New
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="radio"
                id="low"
                name="priority"
                onClick={() => setPriority(1)}
              />
              <label className="priorityLabel lowP" htmlFor="low">
                Low
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="radio"
                id="mid"
                name="priority"
                onClick={() => setPriority(2)}
              />
              <label className="priorityLabel mediumP " htmlFor="mid">
                Medium
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="radio"
                id="high"
                name="priority"
                onClick={() => setPriority(3)}
              />
              <label className="priorityLabel hightP" htmlFor="high">
                High
              </label>
            </div>
          </fieldset>
        </form>
        <div className="cardsBlock">
          <div className="cardx">
            {suggest
              .filter((suggestion) => {
                if (priority !== undefined) {
                  if (suggestion.priority === priority) {
                    return true;
                  }
                  return false;
                }
                return true;
              })
              .map((element) => {
                return <SugestCard key={element.id} suggestData={element} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
