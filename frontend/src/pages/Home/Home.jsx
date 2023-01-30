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
        <div className="filterBlock">
          <fieldset className="filteridea">
            <legend className="priorisation">Priorisation </legend>
            <div>
              <input
                className="checkboxP"
                type="checkbox"
                id="all"
                name="all"
                onClick={() => setPriority()}
              />
              <label className="priorityLabel all" htmlFor="all">
                All
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="checkbox"
                id="new"
                name="new"
              />
              <label className="priorityLabel noneP" htmlFor="new">
                New
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="checkbox"
                id="low"
                name="low"
              />
              <label className="priorityLabel lowP" htmlFor="low">
                Low
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="checkbox"
                id="mid"
                name="mid"
              />
              <label className="priorityLabel mediumP " htmlFor="mid">
                Medium
              </label>
            </div>
            <div>
              <input
                className="checkboxP"
                type="checkbox"
                id="high"
                name="high"
              />
              <label className="priorityLabel hightP" htmlFor="high">
                High
              </label>
            </div>
          </fieldset>
        </div>
        <div className="cardsBlock">
          <div className="cardx">
            {suggest
              .filter((suggestion) => {
                if (!priority) {
                  return true;
                }
                return suggestion.priority === priority;
              })

              .map((element) => {
                return <SugestCard key={element.id} data={element} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
