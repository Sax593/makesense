import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

export default function SuggestFinalForm() {
  const { id } = useParams();
  const [final, setFinal] = useState({
    finale_decision: "",
  });
  const hChange = (evt) => {
    setFinal({ ...final, [evt.target.name]: evt.target.value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/suggests/${id}`, final)

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <form className="finalForm" onSubmit={hSubmit}>
        <div className="inputBlockFinal">
          <label className="labelFinal" htmlFor="title">
            The final decision
            <textarea
              className="inputTextFinal"
              type="text"
              name="finale_decision"
              id="finalDText"
              value={final.name}
              onChange={hChange}
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
