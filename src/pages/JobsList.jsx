import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login"); // redirect if not logged in
      return; // stop fetching
    }

    // Fetch jobs from json-server
    axios
      .get("http://localhost:5000/jobs") // json-server endpoint
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, [navigate]);

  const applyJob = (id) => {
    alert(`You have applied for job ID: ${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear login
    alert("You have been logged out.");
    navigate("/"); // redirect to homepage
  };

  return (
    <section className="min-h-screen flex flex-col items-center text-center bg-gray-900 px-6 text-gray-200">
      {/* Header */}
      <div className="relative w-full max-w-5xl mt-6 flex items-center justify-center">
        {/* Centered Title */}
        <h1 className="text-4xl font-bold text-white">
          Explore Job Opportunities
        </h1>

        {/* Logout Button (top-right) */}
        <button
          onClick={handleLogout}
          className="absolute right-0 px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-600 hover:text-white transition"
        >
          Logout
        </button>
      </div>

      <p className="text-lg text-gray-300 mb-10 max-w-2xl mt-4">
        Browse through our curated job listings and find the role that best fits
        your skills, passion, and career goals.
      </p>

      {/* Jobs Grid */}
      {loading ? (
        <p className="text-gray-400">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-gray-400">No jobs available right now.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-gray-800 shadow rounded-xl text-left hover:shadow-lg hover:border hover:border-blue-600 transition"
            >
              <h2 className="text-2xl font-semibold mb-2 text-white">
                {job.title}
              </h2>
              <p className="text-gray-300 mb-1">
                {job.company} — {job.location}
              </p>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <button
                onClick={() => applyJob(job.id)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
