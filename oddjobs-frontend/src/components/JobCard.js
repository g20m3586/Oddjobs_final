import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default function JobCard({ job }) {
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
    </div>
  );
}
