import axios from "axios";
import { useEffect, useState } from "react";
import propTypes from "prop-types";
import "./style.scss";

export default function SuggestDetails({ suggestData }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=3").then(({ data }) => {
      setUser(data.results);
    });
  }, []);
  return (
    <section className="suggestdetail">
      <div className="main">
        <article className="content">
          <section className="descriptionBlock">
            <h2 className="descriptionTitle">The idea</h2>
            <p className="description">{suggestData.description}</p>
          </section>
          <section className="repercussionBlock">
            <h2 className="repercussionTitle">The repercussions</h2>
            <p className="repercussion">{suggestData.consequences}</p>
          </section>
        </article>
        <article className="people">
          <div className="impacted">
            <h3 className="peopletitle impactedTitle">Impacted people</h3>
            <div className="avatar">
              {user.map((element) => {
                return (
                  <img
                    key={element.id}
                    className="avatarpicture"
                    src={element.picture.medium}
                    alt={element.name.first}
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

SuggestDetails.propTypes = {
  suggestData: propTypes.shape({
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    consequences: propTypes.string.isRequired,
  }).isRequired,
};
