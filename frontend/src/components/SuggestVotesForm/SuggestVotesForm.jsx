import axios from "axios";
import { useState } from "react";
import "./style.scss";

export default function SuggestVotesForm() {
  const [choice1, setChoice1] = useState({
    first: "",
    title: "",
    // suggest_id à rajouter
  });
  const [choice2, setChoice2] = useState({
    second: "",
    title: "",
    // suggest_id à rajouter
  });
  const [choice3, setChoice3] = useState({
    third: "",
    title: "",
    // suggest_id à rajouter
  });

  const hChange1 = (evt) => {
    setChoice1({ ...choice1, [evt.target.name]: evt.target.value });
  };
  const hChange2 = (evt) => {
    setChoice2({ ...choice2, [evt.target.name]: evt.target.value });
  };
  const hChange3 = (evt) => {
    setChoice3({ ...choice3, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();

    axios
      .all([
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/choices`, choice1),
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/choices`, choice2),
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/choices`, choice3),
      ])
      .then(
        axios.spread((...res) => {
          res.status(202);
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <form className="votesForm" onSubmit={hSubmit}>
        <div className="inputBlockVotes">
          <label className="labelFirstPro" htmlFor="title">
            First proposal
            <input
              id="titleFirstProp"
              name="title"
              value={choice1.title}
              placeholder="Title"
              onChange={hChange1}
            />
            <textarea
              className="inputTextFirst"
              type="text"
              name="first"
              id="firstProp"
              value={choice1.name}
              onChange={hChange1}
            />
          </label>
          <label className="labelSecondPro" htmlFor="title">
            Second proposal
            <input
              id="titleSecondProp"
              name="title"
              value={choice2.title}
              placeholder="Title"
              onChange={hChange2}
            />
            <textarea
              className="inputTextSecond"
              type="text"
              name="first"
              id="firstProp"
              value={choice2.name}
              onChange={hChange2}
            />
          </label>
          <label className="labelThirdPro" htmlFor="title">
            Third proposal
            <input
              id="titleThirdProp"
              name="title"
              value={choice3.title}
              placeholder="Title"
              onChange={hChange3}
            />
            <textarea
              className="inputTextThird"
              type="text"
              name="first"
              id="firstProp"
              value={choice3.name}
              onChange={hChange3}
            />
          </label>
        </div>

        <button className="submButton" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}
