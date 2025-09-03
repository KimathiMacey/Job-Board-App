import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; 

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="JobBoard Logo" className="h-12 w-18 object-contain" />
          <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            JobBoard
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/guest-jobs"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Jobs
          </Link>

          {/* Show Login button only on Landing Page */}
          {location.pathname === "/" && (
            <Link
              to="/login"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
