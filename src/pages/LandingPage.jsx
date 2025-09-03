import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 px-6 text-gray-200">
      {/* Hero Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Find Your Dream Job
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Discover opportunities from top companies, connect with recruiters, and
        take the next step in your career. Whether you're a graduate or an
        experienced professional, your journey starts here.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Link
          to="/guest-jobs"
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
        >
          Browse Jobs
        </Link>
        <Link
          to="/create-account"
          className="px-6 py-3 bg-gray-700 text-gray-200 text-lg rounded-lg hover:bg-gray-600 transition"
        >
          Create an Account
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="p-6 bg-gray-800 shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Top Companies</h3>
          <p className="text-gray-400">
            Access job listings from leading employers across industries.
          </p>
        </div>
        <div className="p-6 bg-gray-800 shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Personalized Matches</h3>
          <p className="text-gray-400">
            Get tailored recommendations based on your skills and interests.
          </p>
        </div>
        <div className="p-6 bg-gray-800 shadow rounded-xl">
          <h3 className="text-xl font-semibold mb-2 text-white">Career Growth</h3>
          <p className="text-gray-400">
            Find internships, graduate programs, and senior positions to grow
            your career.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="text-3xl font-bold text-blue-400">10k+</h4>
          <p className="text-gray-400">Active Job Listings</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-blue-400">2k+</h4>
          <p className="text-gray-400">Hiring Companies</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-blue-400">50k+</h4>
          <p className="text-gray-400">Job Seekers</p>
        </div>
      </div>
    </section>
  );
}
