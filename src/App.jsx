import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import CreateAccount from "./pages/CreateAccount";
import GuestJobs from "./pages/GuestJobs";
import JobsList from "./pages/JobsList";
import JobBoard from "./pages/JobBoard";


export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 🔹 Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/Job-Board-App" element={<LandingPage />} />

            {/* Protected route for normal users */}
            <Route
              path="/jobs"
              element={
                user ? <JobsList /> : <Navigate to="/login" />
              }
            />

            {/* Protected route for admins only */}
            <Route
              path="/admin"
              element={
                user && user.role === "admin" ? (
                  <JobBoard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Guest jobs page */}
            <Route path="/guest-jobs" element={<GuestJobs />} />

            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
