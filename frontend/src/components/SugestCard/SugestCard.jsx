import { IoIosAddCircleOutline } from "react-icons/io";
import "./style.scss";

export default function SugestCard() {
  return (
    <article className="cardz">
      <h2>Title</h2>
      <div className="wrapper">
        <div className="progressBar" />
      </div>
      <div className="footerCard">
        <p className="advice">Avis(5)</p>
        <button className="adviceButton" type="button">
          <IoIosAddCircleOutline />
        </button>
      </div>
    </article>
  );
}
