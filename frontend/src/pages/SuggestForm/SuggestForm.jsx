import axios from "axios";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";

import "./style.scss";

export default function SuggestForm() {
  const [search, setSearch] = useState(true);
  const [visibility, setVisibility] = useState(true);

  const [suggest, setSuggest] = useState({
    title: "",
    description: "",
    consequences: "",
    priority: 0,
  });

  const hChange = (evt) => {
    setSuggest({ ...suggest, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/suggests`, suggest)
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="form_idea">
      <p>Suggestion form</p>
      <form className="form" onSubmit={hSubmit}>
        <div className="input">
          <div className="left">
            <label htmlFor="title">
              Title:
              <input
                type="text"
                name="title"
                id="title"
                value={suggest.title}
                onChange={hChange}
              />
            </label>
            <label htmlFor="description">
              Description:
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                value={suggest.description}
                onChange={hChange}
              />
            </label>
            <label htmlFor="impact">
              Potential répercution:
              <textarea
                name="impact"
                id="impact"
                cols="30"
                rows="10"
                value={suggest.consequences}
                onChange={(e) =>
                  setSuggest({ ...suggest, consequences: e.target.value })
                }
              />
            </label>
          </div>
          <div className="right">
            <label htmlFor="vote" className="vote">
              Would you like to add some votes?
              <input type="checkbox" name="vote" id="vote" />
            </label>
            <label className="add_button" htmlFor="expert">
              Experts:
              <button
                onClick={() => {
                  setSearch(!search);
                }}
                className="add"
                type="button"
              >
                <IoIosPersonAdd />
              </button>
            </label>
            <input
              className={search ? "search" : null}
              type="search"
              placeholder="name"
              onChange={hChange}
            />
            <label className="add_button" htmlFor="impacted">
              Impacted:
              <button
                className="add"
                type="button"
                onClick={() => {
                  setVisibility(!visibility);
                }}
              >
                <IoIosPersonAdd />
              </button>
            </label>
            <input
              className={visibility ? "search" : null}
              type="search"
              placeholder="name"
              onChange={hChange}
            />
          </div>
        </div>
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
