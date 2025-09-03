import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function GuestJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs") 
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-gray-200 px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Available Jobs</h1>

      {/* Call-to-action for signup */}
      <div className="bg-blue-700 p-6 rounded-lg text-center mb-8">
        <p className="text-lg text-white mb-3">
          Sign up today to apply for jobs and save your favorites!
        </p>
        <Link
          to="/create-account"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Create Account
        </Link>
      </div>

      {/* Loading state */}
      {loading ? (
        <p className="text-center text-gray-400">Loading jobs...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-400 mb-1">{job.company}</p>
              <p className="text-gray-400 mb-2">{job.location}</p>
              <button
                className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg cursor-not-allowed"
                disabled
              >
                Sign in to Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
