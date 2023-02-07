import { useEffect, useState } from "react";
import axios from "axios";
import SugestCard from "@components/SugestCard/SugestCard";
import Nav from "@components/Nav/Nav";
import "./Style.scss";

export default function Historic() {
  const [suggest, setSuggest] = useState([]);
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
        <h2 className="titlesuggest">Historic of suggestions</h2>
      </header>
      <section className="titlehome">
        <div className="cardsBlock">
          <div className="cardx">
            {suggest
              .filter((element) => {
                if (element.priority === 4) {
                  return true;
                }
                return false;
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
