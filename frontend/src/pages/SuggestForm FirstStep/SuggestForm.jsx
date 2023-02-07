import Nav from "@components/Nav/Nav";
import SuggestIdeaForm from "@components/SuggestIdeaForm/SuggestIdeaForm";
import "./style.scss";

export default function SuggestFormFirstStep() {
  return (
    <section className="form_idea">
      <Nav />
      <header className="headerSuggestF">
        <p className="suggFormTitle">Suggestion Form</p>
      </header>
      <SuggestIdeaForm />
    </section>
  );
}
