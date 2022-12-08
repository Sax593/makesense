import sugest from "@assets/sugest";

export default function SuggestDetails() {
  return (
    <section>
      <h2>{sugest[1].title}</h2>
      <p>{sugest[1].description}</p>
      <p>{sugest[1].repercution}</p>
    </section>
  );
}
