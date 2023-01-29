import Home from "@pages/Home/Home";
import Login from "@pages/Login/Login";
import Thread from "@pages/Thread/Thread";
import Register from "@pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import SuggestForm from "@pages/SuggestForm/SuggestForm";
import FinalDecision from "@components/FinalDecision/FinalDecision";
import Vote from "@components/Vote/Vote";
import Suggest from "@pages/Suggest/Suggest";
import Historic from "@pages/Historic/Historic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thread" element={<Thread />} />
        <Route path="/register" element={<Register />} />
        <Route path="/suggestform" element={<SuggestForm />} />
        <Route path="/finaldecision" element={<FinalDecision />} />
        <Route path="/suggestionDetails/:id" element={<Suggest />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </div>
  );
}

export default App;
