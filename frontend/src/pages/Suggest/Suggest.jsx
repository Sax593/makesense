import Nav from "@components/Nav/Nav";
import NavBarSuggest from "@components/NavBarSuggest/NavBarSuggest";
import SuggestDetails from "@components/SuggestDetails/SuggestDetails";
import Timeline from "@components/Timeline/Timeline";
import "./style.scss";

export default function Suggest() {
  return (
    <div>
      <Nav />
      <div className="timelineBar">
        <Timeline />
      </div>

      <div className="navBarSg">
        <NavBarSuggest />
      </div>

      <div className="detailsSg">
        <SuggestDetails />
      </div>
    </div>
  );
}
