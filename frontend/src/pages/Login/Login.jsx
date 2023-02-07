import LoginForm from "@components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./Style.scss";

export default function Login() {
  return (
    <>
      <header className="loginNavbar">
        <h1 className="titlelogotwo">
          make<span className="underscore">_</span>suggest
        </h1>
        <Link to="/register" className="buttonSign">
          <button type="button" className="linktoregister">
            Sign up
          </button>
        </Link>
      </header>
      <LoginForm />
    </>
  );
}
