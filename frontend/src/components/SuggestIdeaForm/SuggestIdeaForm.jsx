import axios from "axios";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import "./style.scss";

export default function SuggestIdeaForm() {
  const [search, setSearch] = useState(true);
  const [visibility, setVisibility] = useState(true);
  const [date, setDate] = useState(true);

  const [suggest, setSuggest] = useState({
    title: "",
    description: "",
    consequences: "",
    priority: 0,
    contribution_date: "",
    vote_date: "",
    final_date: "",
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
    <section>
      <form className="suggForm" onSubmit={hSubmit}>
        <div className="inputBlock">
          <div className="left">
            <label className="labelTitle" htmlFor="title">
              Title:
              <input
                className="inputText"
                type="text"
                name="title"
                id="title"
                value={suggest.title}
                onChange={hChange}
              />
            </label>
            <div className="descReperc">
              <label className="labelDescription" htmlFor="description">
                Description:
                <textarea
                  className="textArea"
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  value={suggest.description}
                  onChange={hChange}
                />
              </label>
              <label className="labelRepercussion" htmlFor="impact">
                Potential repercution:
                <textarea
                  className="textArea"
                  name="consequences"
                  id="consequences"
                  cols="30"
                  rows="10"
                  value={suggest.consequences}
                  onChange={(evt) => {
                    setSuggest({ ...suggest, consequences: evt.target.value });
                  }}
                />
              </label>
            </div>
          </div>
          <div className="right">
            <div className="ExpImpBlock">
              <label className="vote" htmlFor="vote">
                Would you like to add some votes?
                <input
                  type="checkbox"
                  name="vote"
                  id="vote"
                  onClick={() => {
                    setDate(!date);
                  }}
                />
              </label>
              <div className="ExpImpSecondBlock">
                <label className="labelImpacted add_button" htmlFor="impacted">
                  Impacted:
                  <button
                    onClick={() => {
                      setSearch(!search);
                    }}
                    className="add"
                    type="button"
                  >
                    <IoIosPersonAdd className="personAdd personAdd1" />
                  </button>
                  <input
                    className={search ? "search" : null}
                    type="search"
                    placeholder="name"
                    onChange={hChange}
                  />
                </label>

                <label className="labelExpert add_button" htmlFor="expert">
                  Experts:
                  <div className="expertBlock">
                    <button
                      className="add"
                      type="button"
                      onClick={() => {
                        setVisibility(!visibility);
                      }}
                    >
                      <IoIosPersonAdd className="personAdd personAdd1" />
                    </button>
                  </div>
                  <input
                    className={visibility ? "search" : null}
                    type="search"
                    placeholder="name"
                    onChange={hChange}
                  />
                </label>
              </div>
            </div>
            <div id="datesBlock" className={date ? "hide" : null}>
              <div className="contribDateBlock">
                <label className="contribLabl">
                  Contributions deadline:
                  <input
                    className="contribDate"
                    type="date"
                    name="contribution_date"
                    value={suggest.contribution_date}
                    onChange={hChange}
                  />
                </label>
              </div>
              <div className="voteDateBlock">
                <label className="voteLabl">
                  Votes deadline:
                  <input
                    className="voteDate"
                    type="date"
                    name="vote_date"
                    value={suggest.vote_date}
                    onChange={hChange}
                  />
                </label>
              </div>
              <div className="finaleDateBlock">
                <label className="finaleLabl">
                  Decision deadline:
                  <input
                    className="finaleDate"
                    type="date"
                    name="final_date"
                    value={suggest.final_date}
                    onChange={hChange}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="sendButton" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
