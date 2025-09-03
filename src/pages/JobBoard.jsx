import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const apiUrl = "http://localhost:5000/jobs"; // json-server endpoint
  const navigate = useNavigate();

  // Fetch jobs from db.json
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  // Add new job
  const addJob = async (newJob) => {
    try {
      const response = await axios.post(apiUrl, newJob);
      setJobs([response.data, ...jobs]);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  // Delete job
  const deleteJob = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-950 min-h-screen text-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-orange-500">Available Jobs</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium shadow transition"
        >
          Log Out
        </button>
      </div>

      {/* Job Form Section */}
      <div className="mb-8 bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-800">
        <JobForm onAdd={addJob} />
      </div>

      {/* Job List */}
      {jobs.length === 0 ? (
        <p className="text-gray-400">No jobs available right now.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onDelete={deleteJob} />
          ))}
        </div>
      )}
    </div>
  );
}
