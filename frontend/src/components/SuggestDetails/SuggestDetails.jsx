import { useParams } from "react-router-dom";
import "./style.scss";

export default function SuggestDetails() {
  const { id } = useParams();

  return (
    <section className="suggestdetail">
      <h2>title #{id}</h2>
      <div className="main">
        <article className="content">
          <p className="description">description</p>
          <p className="repercution">repercution</p>
        </article>
        <article className="people">
          <div className="impacted">
            <h3 className="peopletitle">Impacted people</h3>
            <div className="avatar">
              <img className="avatarpicture" src="{user[1].picture}" alt="" />
              <img className="avatarpicture" src="{user[2].picture}" alt="" />
              <img className="avatarpicture" src="{user[5].picture}" alt="" />
            </div>
          </div>
          <div className="expert">
            <h3 className="peopletitle">Expert people</h3>
            <div className="avatar">
              <img className="avatarpicture" src="{user[5].picture}" alt="" />
              <img className="avatarpicture" src="{user[5].picture}" alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
