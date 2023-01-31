import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import votepic from "../../assets/Vote.svg";
import votepictwo from "../../assets/Vote2.svg";
import house from "../../assets/house.svg";

export default function Vote() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/choices/1`)
      .then(({ data }) => {
        setContent(data);
      });
  }, []);

  return (
    <div className="vote-container">
      <div className="center-items">
        <div className="headervote">
          <img className="house" src={house} alt="house" />
          <h2 className="proptitle">{content.title}</h2>
          <img className="votepic" src={votepic} alt="votepic" />
        </div>
        <p className="pstyle" id="fpro1" name="fpro">
          {content.name}
        </p>
        <button className="vote-button" type="button">
          Vote
        </button>
      </div>

      <div className="center-items">
        <div className="headervote">
          <img className="house2" src={house} alt="house" />
          <h2 className="proptitle">{content.title}</h2>
          <img className="votepictwo" src={votepictwo} alt="votepictwo" />
        </div>
        <p className="pstyle" id="fpro2" name="fpro">
          {content.name}
        </p>
        <button className="vote-button" type="button">
          Vote
        </button>
      </div>

      <div className="center-items">
        <div className="headervote">
          <img className="house3" src={house} alt="house" />
          <h2 className="proptitle">{content.title}</h2>
          <img className="votepicthree" src={votepic} alt="votepicthree" />
        </div>
        <p className="pstyle" id="fpro3" name="fpro">
          {content.name}
        </p>
        <button className="vote-button" type="button">
          Vote
        </button>
      </div>
    </div>
  );
}
