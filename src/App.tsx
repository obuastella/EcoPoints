import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import UploadCleanup from "./pages/Upload/Upload";
import ReportDump from "./pages/Report/Report";
import RedeemRewards from "./pages/Rewards/Rewards";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadCleanup />} />
        <Route path="/report" element={<ReportDump />} />
        <Route path="/rewards" element={<RedeemRewards />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
