import Home from "@pages/Home/Home";
import SubscriptionForm from "@pages/SubscriptionForm/SubscriptionForm";
import { Routes, Route } from "react-router-dom";
import SuggestForm from "@pages/SuggestForm/SuggestForm";
import Vote from "@components/Vote/Vote";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SubscriptionForm />} />
        <Route path="/suggestform" element={<SuggestForm />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </div>
  );
}

export default App;
