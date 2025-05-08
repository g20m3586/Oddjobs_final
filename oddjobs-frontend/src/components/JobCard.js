import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default function JobCard({ job, showActions = false, onDelete }) {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition">
      <h2 className="text-xl font-bold text-blue-600 mb-1">{job.title}</h2>
      <p className="text-sm text-gray-600 mb-1">{job.location}</p>

      {/* 📅 Posted time */}
      <p className="text-xs text-gray-500 mb-3">
        Posted {formatDistanceToNow(new Date(job.date))} ago
      </p>

      {/* 📝 Truncated description */}
      <p className="text-gray-700 mb-4">
        {job.description.length > 100
          ? job.description.slice(0, 100) + "..."
          : job.description}
      </p>

      {/* 💰 Pay + View link */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-green-700">{job.pay}</span>
        <Link
          href={`/jobs/${job._id}`}
          className="text-blue-500 hover:underline text-sm"
        >
          View Job
        </Link>
      </div>

      {/* ✏️ Edit/Delete actions */}
      {showActions && (
        <div className="mt-4 flex gap-4 text-sm">
          <Link
            href={`/jobs/edit/${job._id}`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(job._id)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
