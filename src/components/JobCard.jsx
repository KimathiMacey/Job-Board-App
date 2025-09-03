export default function JobCard({ job, onDelete }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition transform duration-200 ease-in-out">
      {/* Title */}
      <h2 className="text-xl font-semibold text-blue-400 mb-2">
        {job.title}
      </h2>

      {/* Company + Location */}
      <p className="text-gray-300 text-sm mb-3">
        <span className="font-medium text-gray-200">{job.company}</span> · {job.location}
      </p>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed text-sm">
        {job.description}
      </p>

      {/* Admin Actions */}
      {onDelete && (
        <button
          onClick={() => onDelete(job.id)}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-white font-medium shadow-sm transition"
        >
          Delete
        </button>
      )}
    </div>
  );
}
