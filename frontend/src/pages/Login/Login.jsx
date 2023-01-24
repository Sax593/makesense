import LoginForm from "@components/LoginForm/LoginForm";
import "./Style.scss";

export default function Login() {
  return (
    <>
      <h1 className="titlelogo">
        Make<span className="underscore">_</span>suggest
      </h1>
      <LoginForm />
    </>
  );
}
