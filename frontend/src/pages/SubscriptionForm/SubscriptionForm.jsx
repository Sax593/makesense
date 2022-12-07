import "./style.scss";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

export default function SubscriptionForm() {
  return (
    <section className="subscriptionForm">
      <img className="logoMS" src={logoMS} alt="logoMS" />
      <img className="logoMS2" src={logoMS2} alt="logoMS" />
      <img className="logoMS3" src={logoMS3} alt="logoMS" />
      <img
        className="avatarLogo"
        src="https://via.placeholder.com/300"
        alt="avatar"
      />

      <form>
        <label className="inputFields">
          <section className="identityInputs">
            <input
              className="nameInput"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="fNameInput"
              type="text"
              name="firstname"
              placeholder="Firstname"
              required
            />
          </section>
          <select className="localisationInput" required>
            <option value="---">Localisation</option>
            <option value="Africa">Abidjan</option>
            <option value="Asia">Beirut</option>
            <option value="Africa">Dakar</option>
            <option value="America">Lima</option>
            <option value="Asia">Manila</option>
            <option value="America">Mexico</option>
            <option value="Europe">Paris</option>
          </select>
          <input
            className="emailInput"
            type="text"
            name="email"
            placeholder="email"
            required
          />
          <input
            className="emailConfInput"
            type="text"
            name="confEmail"
            placeholder="email confirmation"
            required
          />
          <input
            className="passInput"
            type="text"
            name="passw"
            placeholder="password"
            required
          />
          <input
            className="passConfInput"
            type="text"
            name="email"
            placeholder="password confirmation"
            required
          />
        </label>
        <button className="validation" type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
