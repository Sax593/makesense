import axios from "axios";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
      <p className="suggFormTitle">Suggestion Form</p>
      <form className="suggForm" onSubmit={hSubmit}>
        <div className="inputBlock">
          <div className="left">
            <label className="labelTitle" htmlFor="title">
              Title:
              <ReactQuill
                className="inputText"
                type="text"
                name="title"
                id="title"
                value={suggest.title}
                onChange={(newValue) => {
                  setSuggest({ ...suggest, title: newValue });
                }}
              />
            </label>
            <label className="labelDescription" htmlFor="description">
              Description:
              <ReactQuill
                className="textArea"
                name="description"
                id="description"
                cols="30"
                rows="10"
                value={suggest.description}
                onChange={(newValue) => {
                  setSuggest({ ...suggest, description: newValue });
                }}
              />
            </label>
            <label className="labelRepercussion" htmlFor="impact">
              Potential répercution:
              <ReactQuill
                className="textArea"
                name="consequences"
                id="consequences"
                cols="30"
                rows="10"
                value={suggest.consequences}
                onChange={(newValue) => {
                  setSuggest({ ...suggest, consequences: newValue });
                }}
              />
            </label>
          </div>
          <div className="right">
            <label className="vote" htmlFor="vote">
              Would you like to add some votes?
              <input type="checkbox" name="vote" id="vote" />
            </label>
            <label className="labelImpacted add_button" htmlFor="impacted">
              Impacted:
            </label>
            <div className="impactedBlock">
              <button
                onClick={() => {
                  setSearch(!search);
                }}
                className="add"
                type="button"
              >
                <IoIosPersonAdd className="personAdd" />
              </button>
            </div>
            <input
              className={search ? "search" : null}
              type="search"
              placeholder="name"
              onChange={hChange}
            />

            <label className="labelExpert add_button" htmlFor="expert">
              Experts:
            </label>
            <div className="expertBlock">
              <button
                className="add"
                type="button"
                onClick={() => {
                  setVisibility(!visibility);
                }}
              >
                <IoIosPersonAdd className="personAdd" />
              </button>
            </div>
            <input
              className={visibility ? "search" : null}
              type="search"
              placeholder="name"
              onChange={hChange}
            />
          </div>
        </div>
      </form>
      <button className="sendButton" type="submit">
        Send
      </button>
    </section>
  );
}
