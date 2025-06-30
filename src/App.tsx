import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
