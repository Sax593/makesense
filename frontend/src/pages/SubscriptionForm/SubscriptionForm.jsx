import "./style.scss";
import { useState } from "react";
import axios from "axios";
import logoMS from "../../assets/pills.svg";
import logoMS2 from "../../assets/pills2.svg";
import logoMS3 from "../../assets/pills3.svg";

export default function SubscriptionForm() {
  const [user, setUser] = useState({
    name: "",
    firstname: "",
    localisation: "",
    email: "",
    confEmail: "",
    password: "",
    confPass: "",
    role: "Valid",
    avatar: "",
  });
  const hChange = (evt) => {
    const input = evt.target;
    setUser({ ...user, [input.name]: input.value });

    if (input.name === "avatar") {
      const avatarPreview = document.getElementById("avatarPreview");
      if (input.value) {
        avatarPreview.src = URL.createObjectURL(input.files[0]);
      } else {
        avatarPreview.src = "";
      }
    }
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    if (user.email !== user.confEmail) {
      alert("Error: Email is not valid");
    }
    if (user.password !== user.confPass) {
      alert("Error: Password is not valid");
    }

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, user);
  };

  window.addEventListener("beforeunload", () => {
    const avatarPreview = document.getElementById("avatarPreview");
    URL.revokeObjectURL(avatarPreview.src);
  });

  return (
    <section className="subscriptionForm">
      <img className="logoMS" src={logoMS} alt="logoMS" />
      <img className="logoMS2" src={logoMS2} alt="logoMS" />
      <img className="logoMS3" src={logoMS3} alt="logoMS" />
      <img className="avatarPrev" id="avatarPreview" src="" alt="" />

      <form onSubmit={hSubmit}>
        <label className="inputFields">
          <section className="identityInputs">
            <input
              className="nameInput"
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={hChange}
              required
            />
            <input
              className="fNameInput"
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={user.firstname}
              onChange={hChange}
              required
            />
          </section>
          <select
            className="localisationInput"
            value={user.localisation}
            onChange={(e) => setUser({ ...user, localisation: e.target.value })}
            required
          >
            <option value="---">Localisation</option>
            <option value="Abidjan">Abidjan</option>
            <option value="Beirut">Beirut</option>
            <option value="Dakar">Dakar</option>
            <option value="Lima">Lima</option>
            <option value="Manila">Manila</option>
            <option value="Mexico">Mexico</option>
            <option value="Paris">Paris</option>
          </select>
          <input
            className="emailInput"
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={hChange}
            required
          />
          <input
            className="emailConfInput"
            type="email"
            name="confEmail"
            placeholder="email confirmation"
            value={user.confEmail}
            onChange={hChange}
            required
          />
          <input
            className="passInput"
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={hChange}
            required
          />
          <input
            className="passConfInput"
            type="password"
            name="confPass"
            placeholder="password confirmation"
            value={user.confPass}
            onChange={hChange}
            required
          />
          <p className="favatar"> Choose your avatar :</p>
          <input
            className="favatarInput"
            type="file"
            name="avatar"
            placeholder="Choose your avatar"
            value={user.avatar}
            onChange={hChange}
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
