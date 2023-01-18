import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.scss";

export default function SuggestDetails() {
  const [suggest, setSuggest] = useState([]);
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=3").then(({ data }) => {
      setUser(data.results);
    });
  }, []);

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
    <section className="suggestdetail">
      <h2 className="suggestTitleMain">{suggest.title}</h2>
      <div className="main">
        <article className="content">
          <section className="descriptionBlock">
            <h2 className="descriptionTitle">The idea</h2>
            <p className="description">{suggest.description}</p>
          </section>
          <section className="repercussionBlock">
            <h2 className="repercussionTitle">The repercussions</h2>
            <p className="repercussion">{suggest.consequences}</p>
          </section>
        </article>
        <article className="people">
          <div className="impacted">
            <h3 className="peopletitle impactedTitle">Impacted people</h3>
            <div className="avatar">
              {user.map((avatar) => {
                return (
                  <img
                    key={avatar.id}
                    className="avatarpicture"
                    src={avatar.picture.medium}
                    alt={avatar.name.first}
                  />
                );
              })}
            </div>
          </div>
          <div className="expert">
            <h3 className="peopletitle expertTitle">Expert people</h3>
            <div className="avatar">
              {user.map((avatar) => {
                return (
                  <img
                    key={avatar.id}
                    className="avatarpicture"
                    src={avatar.picture.medium}
                    alt={avatar.name.first}
                  />
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
