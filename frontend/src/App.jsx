import Home from "@pages/Home/Home";
import Thread from "@pages/Thread/Thread";
import Register from "@pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import SuggestForm from "@pages/SuggestForm/SuggestForm";
import FinalDecision from "@components/FinalDecision/FinalDecision";
import Vote from "@components/Vote/Vote";
import SuggestDetails from "@components/SuggestDetails/SuggestDetails";
import Suggest from "@pages/Suggest/Suggest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thread" element={<Thread />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<SuggestDetails />} />
        <Route path="/suggestform" element={<SuggestForm />} />
        <Route path="/finaldecision" element={<FinalDecision />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/suggestionDetails" element={<Suggest />} />
      </Routes>
    </div>
  );
}

export default App;
