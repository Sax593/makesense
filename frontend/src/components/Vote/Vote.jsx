import "./style.scss";

export default function Vote() {
  return (
    <div className="vote-container">
      <div className="vote center-items">
        <h2 className="proptitle">Première proposition</h2>
        <p id="fpro1" name="fpro" />
        <button className="vote-button" type="button">
          Voter
        </button>
      </div>

      <div className="vote center-items">
        <h2 className="proptitle">Deuxième proposition</h2>
        <p id="fpro2" name="fpro" />
        <button className="vote-button" type="button">
          Voter
        </button>
      </div>

      <div className="vote center-items">
        <h2 className="proptitle">Troisième proposition</h2>
        <p id="fpro3" name="fpro" />
        <button className="vote-button" type="button">
          Voter
        </button>
      </div>
    </div>
  );
}
