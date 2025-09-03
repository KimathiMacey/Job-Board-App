import { useState } from "react";

export default function JobForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.company) return;

    onAdd({ id: Date.now(), ...form });
    setForm({ title: "", company: "", location: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700"
    >
      {/* Heading */}
      <h2 className="text-xl font-semibold text-blue-300">Post a Job</h2>

      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Job Title
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. Software Engineer"
          className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="e.g. Google"
          className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Remote / Nairobi"
          className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Job Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Brief description of the job..."
          rows="4"
          className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
      >
        Add Job
      </button>
    </form>
  );
}
