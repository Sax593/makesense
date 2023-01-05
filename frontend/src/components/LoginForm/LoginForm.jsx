import { useState } from "react";
import "./style.scss";

export default function LoginForm() {
  const [newConnect, setNewConnect] = useState({
    name: "",
    password: "",
  });
  const hChange = (evt) => {
    setNewConnect({ ...newConnect, [evt.target.name]: evt.target.value });
  };
  const hSubmit = () => {};
  return (
    <form className="loginForm" onSubmit={hSubmit}>
      <label className="inputLoginForm">
        <h1 className="loginTitle">LogIn</h1>
        <input
          className="inputLogin"
          type="text"
          name="name"
          value={newConnect.name}
          placeholder="Name"
          onChange={hChange}
        />
        <input
          className="inputLogin"
          type="password"
          name="password"
          value={newConnect.password}
          placeholder="Password"
          onChange={hChange}
        />
      </label>
      <button type="submit" className="loginSubmit">
        Connect
      </button>
    </form>
  );
}
