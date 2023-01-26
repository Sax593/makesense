import "./style.scss";
import votepic from "../../assets/Vote.svg";
import votepictwo from "../../assets/Vote2.svg";
import line from "../../assets/line.svg";
import house from "../../assets/house.svg";

export default function Vote() {
  return (
    <div className="vote-container">
      <img className="house" src={house} alt="house" />
      <img className="votepic" src={votepic} alt="votepic" />

      <div className="vote center-items">
        <h2 className="proptitle">First proposal</h2>
        <p className="pstyle" id="fpro1" name="fpro">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
        </p>
        <button className="vote-button" type="button">
          Vote
        </button>
        <img className="line" src={line} alt="line" />
      </div>

      <div className="vote center-items">
        <img className="house2" src={house} alt="house" />
        <img className="votepictwo" src={votepictwo} alt="votepictwo" />
        <h2 className="proptitle">Second proposal</h2>
        <p className="pstyle" id="fpro2" name="fpro">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
        </p>
        <button className="vote-button" type="button">
          Vote
        </button>
      </div>

      <div className="vote center-items">
        <img className="house3" src={house} alt="house" />
        <img className="votepicthree" src={votepic} alt="votepicthree" />
        <h2 className="proptitle">Third proposal</h2>
        <p className="pstyle" id="fpro3" name="fpro">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
        </p>
        <button className="vote-button" type="button">
          Vote
        </button>
      </div>
    </div>
  );
}
