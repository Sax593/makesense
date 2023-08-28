import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SugestCard from "@components/SugestCard/SugestCard";
import Nav from "@components/Nav/Nav";
import SuggestCardToForm from "@components/SuggestCardToForm/SugestCardToForm";
import "./Style.scss";
import { userContext } from "@services/context/userContext";

export default function PersonnalHistoric() {
  const { users } = useContext(userContext);
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/suggests/users/${users.id}`)
      .then(({ data }) => {
        setSuggest(data);
      });
  }, []);
  return (
    <>
      <Nav />
      <header id="headerSuggestion">
        <h2 className="titlesuggest">Historic of your suggestions</h2>
      </header>
      <section className="titlehome">
        <div className="cardsBlock">
          <div className="cardsuggest">
            <h3 className="titleParts">Your suggestion is:</h3>
            {suggest
              .filter((element) => {
                if (element.priority !== 4) {
                  return true;
                }
                return false;
              })
              .map((element) => {
                return (
                  <SuggestCardToForm key={element.id} suggestData={element} />
                );
              })}
          </div>
          <div className="cardsuggest">
            <h3 className="titleParts">Suggestions completed</h3>
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
