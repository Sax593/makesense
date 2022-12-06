import "./style.scss";

export default function SubscriptionForm() {
  return (
    <section className="subscriptionForm">
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
            />
            <input
              className="fNameInput"
              type="text"
              name="firstname"
              placeholder="Firstname"
            />
          </section>
          <select className="localisationInput">
            <option value="---">Localisation</option>
            <option value="continent">Amériques</option>
            <option value="continent">Afrique de l'Ouest</option>
            <option value="country">Philippines</option>
            <option value="Amériques">Liban</option>
            <option value="Amériques">France</option>
          </select>
          <input
            className="emailInput"
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            className="emailConfInput"
            type="text"
            name="confEmail"
            placeholder="email confirmation"
          />
          <input
            className="passInput"
            type="text"
            name="passw"
            placeholder="password"
          />
          <input
            className="passConfInput"
            type="text"
            name="email"
            placeholder="password confirmation"
          />
        </label>
        <input className="validation" type="submit" value="Je valide" />
      </form>
    </section>
  );
}
