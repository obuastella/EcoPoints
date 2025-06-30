import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
