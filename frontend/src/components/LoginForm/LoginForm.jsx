import { useContext, useState } from "react";
import axios from "axios";
import { userContext } from "@services/context/userContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.scss";
import wallmake from "../../assets/makesensel.svg";
import line from "../../assets/line.svg";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setUsers } = useContext(userContext);
  const [newConnect, setNewConnect] = useState({
    email: "",
    password: "",
  });
  const hChange = (evt) => {
    setNewConnect({ ...newConnect, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, newConnect)
      .then(({ data }) => {
        const { user } = data;
        setUsers(user);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Connect Failure",
          text: "Wrong passwords or email address!",
        });
      });
  };
  return (
    <>
      <img className="wallmake" src={wallmake} alt="wallmake" />
      <form className="loginForm" onSubmit={hSubmit}>
        <label className="inputLoginForm">
          <h1 className="loginTitle">Login</h1>
          <input
            className="inputLogin"
            type="text"
            name="email"
            value={newConnect.email}
            placeholder="Email"
            onChange={hChange}
            autoComplete="off"
          />
          <input
            className="inputLogin"
            type="password"
            name="password"
            value={newConnect.password}
            placeholder="Password"
            onChange={hChange}
            autoComplete="off"
          />
        </label>
        <button type="submit" className="loginSubmit">
          Connect
        </button>
      </form>
      <img className="linefinal" src={line} alt="line" />
    </>
  );
}
