import "./style.scss";
export default function Vote() {
  return (
    <div className="vote">
      <label>
        <h2 className="proptitle">Première proposition</h2>
        <textarea id="fpro1" name="fpro" rows="15"></textarea>
        <button className="vote-button">Voter</button>
        <h2 className="proptitle">Deuxième proposition</h2>

        <textarea id="fpro2" name="fpro" rows="15"></textarea>
        <button className="vote-button">Voter</button>
        <h2 className="proptitle">Troisième proposition</h2>

        <textarea id="fpro3" name="fpro" rows="15"></textarea>
        <button className="vote-button">Voter</button>
      </label>
    </div>
  );
}
