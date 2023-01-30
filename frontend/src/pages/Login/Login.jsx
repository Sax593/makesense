import LoginForm from "@components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./Style.scss";

export default function Login() {
  return (
    <>
      <header className="loginNavbar">
        <h1 className="titlelogotwo">
          Make<span className="underscore">_</span>suggest
        </h1>
        <Link to="/register">
          <button type="button" className="linktoregister">
            Sign up
          </button>
        </Link>
      </header>
      <LoginForm />
    </>
  );
}
