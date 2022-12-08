import sugest from "@assets/sugest";
import "./style.scss";
import user from "@assets/user";

export default function SuggestDetails() {
  return (
    <section className="suggestdetail">
      <h2>{sugest[1].title}</h2>
      <div className="main">
        <article className="content">
          <p className="description">{sugest[1].description}</p>
          <p className="repercution">{sugest[1].repercution}</p>
        </article>
        <article className="people">
          <div className="impacted">
            <h3 className="peopletitle">Impacted people</h3>
            <div className="avatar">
              <img
                className="avatarpicture"
                src={user[1].picture}
                alt={`${user[1].lastname} avatar`}
              />
              <img
                className="avatarpicture"
                src={user[2].picture}
                alt={`${user[2].lastname} avatar`}
              />
              <img
                className="avatarpicture"
                src={user[5].picture}
                alt={`${user[5].lastname} avatar`}
              />
            </div>
          </div>
          <div className="expert">
            <h3 className="peopletitle">Expert people</h3>
            <div className="avatar">
              <img
                className="avatarpicture"
                src={user[3].picture}
                alt={`${user[3].lastname} avatar`}
              />
              <img
                className="avatarpicture"
                src={user[4].picture}
                alt={`${user[4].lastname} avatar`}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
