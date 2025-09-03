import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LogIn({ setUser }) {   //  accept setUser from App.jsx
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch all users
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      // Find matching user
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Save to localStorage
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user); // 👈 update App state so protected routes unlock

        // Redirect based on role
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/jobs");
        }
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-6 py-16 text-gray-200">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome Back
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Log in to access job opportunities tailored to you.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
            className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Log In
        </button>

        <p className="text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <Link to="/create-account" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
}
