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
import PersonnalHistoric from "@pages/PersonnalHistoric/PersonnalHistoric";
import SuggestFormFirstStep from "@pages/SuggestForm FirstStep/SuggestForm";
import { useContext } from "react";
import { userContext } from "@services/context/userContext";

function App() {
  const { users } = useContext(userContext);
  return (
    <div className="App">
      {users.id ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/thread" element={<Thread />} />
          <Route path="/register" element={<Register />} />
          <Route path="/suggestform/:id" element={<SuggestForm />} />
          <Route path="/suggestform" element={<SuggestFormFirstStep />} />
          <Route path="/finaldecision" element={<FinalDecision />} />
          <Route path="/suggestionDetails/:id" element={<Suggest />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/yourhistoric" element={<PersonnalHistoric />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
