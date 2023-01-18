import SugestCard from "@components/SugestCard/SugestCard";
import Nav from "@components/Nav/Nav";
import "./Style.scss";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

export default function Home() {
  return (
    <>
      <Nav />

      <img className="logoxMS" src={logoMS} alt="logoMS" />
      <img className="logoxMS2" src={logoMS2} alt="logoMS" />
      <img className="logoxMS3" src={logoMS3} alt="logoMS" />

      <section className="titlehome">
        <h1 className="settingstitle"> </h1>
        <h2 className="titlesuggest">Suggestions</h2>
        <fieldset className="filteridea">
          <legend>Priorisation </legend>

          <div>
            <input type="checkbox" id="high" name="high" />
            <label htmlFor="high">Haute</label>
          </div>

          <div>
            <input type="checkbox" id="mid" name="mid" />
            <label htmlFor="mid">Moyenne</label>
          </div>

          <div>
            <input type="checkbox" id="low" name="low" />
            <label htmlFor="low">Basse</label>
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
