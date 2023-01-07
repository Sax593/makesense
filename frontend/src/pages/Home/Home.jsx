import SugestCard from "@components/SugestCard/SugestCard";
import "./Style.scss";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

export default function Home() {
  return (
    <>
      <img className="logoxMS" src={logoMS} alt="logoMS" />
      <img className="logoxMS2" src={logoMS2} alt="logoMS" />
      <img className="logoxMS3" src={logoMS3} alt="logoMS" />

      <section className="titlehome">
        <h1 className="settingstitle"> </h1>
        <h2 className="titlesuggest">Suggestions</h2>
        <fieldset className="filteridea">
          <legend>Priorisation </legend>

          <div>
            <label htmlFor="high">
              Haute
              <input type="checkbox" id="high" name="high" />
            </label>
          </div>

          <div>
            <label htmlFor="mid">
              Moyenne
              <input type="checkbox" id="mid" name="mid" />
            </label>
          </div>

          <div>
            <label htmlFor="low">
              Basse
              <input type="checkbox" id="low" name="low" />
            </label>
          </div>
        </fieldset>
        <div className="cardx">
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
          <SugestCard />
        </div>
      </section>
    </>
  );
}
