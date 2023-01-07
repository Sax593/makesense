import Form from "@pages/Form/Form";
import Home from "@pages/Home/Home";
import SubscriptionForm from "@pages/SubscriptionForm/SubscriptionForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SubscriptionForm />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
