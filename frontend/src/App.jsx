import Home from "@pages/Home/Home";
import Register from "@pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import SuggestForm from "@pages/SuggestForm/SuggestForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/suggestform" element={<SuggestForm />} />
      </Routes>
    </div>
  );
}

export default App;
